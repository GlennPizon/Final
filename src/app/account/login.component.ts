import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../_services';
import { environment } from '../../environments/environment';
import { Role } from '../_models';

@Component({
    templateUrl: 'login.component.html',
    standalone: false
})
export class LoginComponent implements OnInit {
    form: UntypedFormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {
        // redirect to appropriate page if already logged in
        if (this.accountService.accountValue) {
            this.redirectBasedOnRole(this.accountService.accountValue);
        }
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        // Regular login flow
        this.accountService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: (account) => {
                    this.alertService.success('Login successful!', { keepAfterRouteChange: true });
                    this.redirectBasedOnRole(account);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private redirectBasedOnRole(account: any) {
        // Redirect based on role
        if (account.role === Role.Admin) {
            this.router.navigate(['/admin']);
        } else {
            // get return url from query parameters or default to home page
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
        }
    }
}