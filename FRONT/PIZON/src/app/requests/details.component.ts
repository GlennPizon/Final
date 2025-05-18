import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../_services/request.service';
import { AccountService } from '../_services/account.service';
import { Role } from '../_models/role';
import { Request } from '../_models/request';

@Component({
  selector: 'app-request-details',
  templateUrl: './details.component.html'
})
export class RequestDetailsComponent implements OnInit {
  request!: Request;
  isAdmin = false;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.requestService.getById(id).subscribe(request => this.request = request);

    const account = this.accountService.userValue;
    this.isAdmin = account?.role === Role.Admin;
  }
}
