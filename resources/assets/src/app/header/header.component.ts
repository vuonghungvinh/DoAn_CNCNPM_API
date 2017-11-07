import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(
    private router: Router,
    private authencativeService : AuthenticationService
  ){}
  logout() {
		this.authencativeService.logout();
		this.router.navigate(['/login']);
	}
}
