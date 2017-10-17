import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuanLiCauHoi } from '../services/quanlicauhoi';

@Component({
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuanLiCauHoi]
})

export class QuestionComponent {
  constructor(
    private xemcauhoi: QuanLiCauHoi) {
  }
  public mamon: any[];
  ngOnInit() {
    this.xemcauhoi.getMaMon().subscribe( data => {
      this.mamon = data['mon'];
    });
  }
}
