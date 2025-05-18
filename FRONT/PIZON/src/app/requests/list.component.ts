import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services';
import { Request } from '../_models';

@Component({
  selector: 'app-request-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  requests: Request[] = [];
  loading = false;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loading = true;
    this.requestService.getAll().subscribe({
      next: (data) => {
        this.requests = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
