// src/auth/auth.service.ts
import bcrypt from 'bcryptjs';
import { AppDataSource } from '../data-source';
import { Accounts } from '../accounts/accounts.entity';
import { RefreshToken } from './refresh-token.entity';
import { generateJwtToken } from './jwt.utils';


export class AuthService {
  private accountRepo = AppDataSource.getRepository(Accounts);
  private refreshTokenRepo = AppDataSource.getRepository(RefreshToken);

  async login(email: string, password: string, ip: string) {
    const user = await this.accountRepo.findOne({ where: { email }, select: ['id', 'email', 'passwordHash', 'role'] });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new Error('Invalid email or password');
    }

    const jwtToken = generateJwtToken({ id: user.id, role: user.role });
    const refreshToken = await this.createRefreshToken(user, ip);


    return {
      ...user,
      jwtToken,
      refreshToken: refreshToken.token
    };
  }

  async createRefreshToken(user: Accounts, ip: string): Promise<RefreshToken> {
    const token = new RefreshToken();
    token.token = crypto.randomUUID();
    token.account = user;
    token.created = new Date();
    token.expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    token.createdByIp = ip;

    await this.refreshTokenRepo.save(token);
    return token;
  }

  async   refresh(token: string, ip: string) {
    const existing = await this.refreshTokenRepo.findOne({
      where: { token },
      relations: ['account']
    });

    if (!existing || !existing.isActive) {
      throw new Error('Invalid or expired refresh token');
    }

    const newToken = await this.createRefreshToken(existing.account, ip);
    existing.revoked = new Date();
    existing.revokedByIp = ip;
    existing.replacedByToken = newToken.token;
    await this.refreshTokenRepo.save(existing);

    const jwtToken = generateJwtToken({ id: existing.account.id, role: existing.account.role });

    return {
      jwtToken,
      refreshToken: newToken.token
    };
  }

  async revoke(token: string, ip: string) {
    const refresh = await this.refreshTokenRepo.findOne({ where: { token } });
    if (!refresh || !refresh.isActive) {
      throw new Error('Invalid token');
    }

    refresh.revoked = new Date();
    refresh.revokedByIp = ip;
    await this.refreshTokenRepo.save(refresh);
  }

  async logout(token: string, ip: string) {
    await this.revoke(token, ip);
    return { message: 'Logged out' };
  }

  
}
