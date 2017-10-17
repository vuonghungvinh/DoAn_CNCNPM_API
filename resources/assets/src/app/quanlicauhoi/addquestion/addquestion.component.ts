import { Component, OnInit } from '@angular/core';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';
import { Router } from '@angular/router';

@Component({
  selector: 'add-question-component',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss'],
  providers: [QuanLiCauHoi]
})

export class AddQuestionComponent {
constructor(
  private taomoicauhoi: QuanLiCauHoi){

  }
  public mon: any[];
  ngOnInit() {
    this.taomoicauhoi.getMaMon().subscribe( data => {
      this.mon = data['mon'];
    })
  }
}
