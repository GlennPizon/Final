import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../_services';
import { Request } from '../_models/';

@Component({
  selector: 'app-request-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  requestId!: number;
  request!: Request;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.paramMap.get('id')!;
    this.requestService.getById(this.requestId).subscribe({
      next: (data) => {
        this.request = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
