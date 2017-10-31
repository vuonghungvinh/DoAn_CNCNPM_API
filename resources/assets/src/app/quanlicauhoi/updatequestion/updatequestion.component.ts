import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'update-question',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.scss'],
  providers: [QuanLiCauHoi]
})

export class UpdateQuestionComponent {
  public id: number;
  public cauhoi: any[];
  constructor(
    private updatequestion: QuanLiCauHoi,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    })
  }
}

