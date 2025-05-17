import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/accounts" routerLinkActive="active">Accounts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/employees" routerLinkActive="active">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/departments" routerLinkActive="active">Departments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/employees/request" routerLinkActive="active">Requests</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent { }
