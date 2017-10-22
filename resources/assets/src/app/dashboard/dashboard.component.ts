import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthenticationService]
})
export class DashboardComponent {

  constructor(
    private authentacation: AuthenticationService
  ) { }

  detail() {
    this.authentacation.getDetail().subscribe(data=>{
      console.log(data);
    });
  }

}
