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
  public listcauhoi: any[];
  public dapandung: any[];
  ngOnInit() {
    this.xemcauhoi.getMaMon().subscribe( data => {
      this.mamon = data['mon'];
    });
    this.xemcauhoi.getCauHoi().subscribe( data =>{
      this.listcauhoi = data['listquestion'];
    });
  }
  getDapan(listdapan, dapan) {
    const arr_dapan = dapan.split(',');
    let result = '';
    for (const da in listdapan) {
      if (arr_dapan.indexOf(listdapan[da]['id'].toString()) >= 0) {
        if (result === '') {
          result = listdapan[da]['tendapan'];
        } else {
          result += '\n' + listdapan[da]['tendapan'];
        }
      }
    }
    return result;
  }
}
