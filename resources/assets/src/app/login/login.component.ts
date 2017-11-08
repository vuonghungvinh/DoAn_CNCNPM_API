import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService]
})

export class LoginComponent {
    constructor(
        private authentication: AuthenticationService,
        private router: Router
    ) {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/xemdanhsach']);
        }
    }
    login(value) {
        console.log(value);
        this.authentication.login(value).subscribe(data => {
            this.router.navigate(['/xemdanhsach']);
        }, error => {
            console.log(error);
        });
    }
}
