import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-account-add-edit',
  templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  isAddMode!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: [''],
    });

    if (!this.isAddMode) {
      this.accountService.getById(this.id).subscribe(account => {
        this.form.patchValue(account);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.isAddMode) {
      this.accountService.register(this.form.value).subscribe(() => {
        this.router.navigate(['/accounts/list']);
      });
    } else {
      this.accountService.update(this.id!, this.form.value).subscribe(() => {
        this.router.navigate(['/accounts/list']);
      });
    }
  }
}
