import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from '../_models/alert';

@Injectable({ providedIn: 'root' })
export class AlertService implements OnDestroy {
  private subject = new Subject<Alert | null>();
  private keepAfterRouteChange = false;
  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      });
  }

  getAlert(): Observable<Alert | null> {
    return this.subject.asObservable();
  }

  success(message: string, options?: Partial<Alert>) {
    this.alert({ ...options, type: 'success', message });
  }

  error(message: string, options?: Partial<Alert>) {
    this.alert({ ...options, type: 'error', message });
  }

  info(message: string, options?: Partial<Alert>) {
    this.alert({ ...options, type: 'info', message });
  }

  warn(message: string, options?: Partial<Alert>) {
    this.alert({ ...options, type: 'warning', message });
  }

  private alert(alert: Partial<Alert>) {
    if (!alert.type || !alert.message) {
      throw new Error('Alert type and message are required');
    }

    const fullAlert: Alert = new Alert(
      this.uniqueId(),
      alert.type,
      alert.message,
      alert.autoClose ?? true,
      alert.keepAfterRouteChange ?? false,
      alert.fade ?? false
    );

    this.keepAfterRouteChange = fullAlert.keepAfterRouteChange;
    this.subject.next(fullAlert);
  }

  clear() {
    this.subject.next(null);
  }

  private uniqueId(): string {
    return crypto.randomUUID?.() ?? Math.random().toString(36).substring(2, 9);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
