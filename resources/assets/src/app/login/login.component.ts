import { Component } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: "login-component",
    templateUrl: "./login.component.html",
    providers: [AuthenticationService]
})

export class LoginComponent{
    constructor(
        private authentication: AuthenticationService,
        private router: Router){

    }
    login(value) {
        console.log(value);
        this.authentication.login(value).subscribe(data => {
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
        });
    }
}