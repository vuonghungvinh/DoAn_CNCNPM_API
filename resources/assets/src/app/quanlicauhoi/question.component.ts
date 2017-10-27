import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuanLiCauHoi } from '../services/quanlicauhoi';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuanLiCauHoi]
})

export class QuestionComponent {
  constructor(
    private xemcauhoi: QuanLiCauHoi) {
  }
  public mon: any[];
  public listcauhoi: any[];
  public dapandung: any[];
  public allcauhoi: any[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.xemcauhoi.getMaMon().subscribe(data => {
      this.mon = data['mon'];
    });
    this.xemcauhoi.getCauHoi().subscribe(data => {
      this.allcauhoi = data['listquestion'];
      this.listcauhoi = [...this.allcauhoi];
    });
  }
  deleteQuestion(value: number, index: number) {
    if (confirm('Bạn có chắc muốn xóa câu hỏi này??') === true ) {
      this.xemcauhoi.deleteQuestion(value).subscribe(data => {
        this.listcauhoi.splice(index, 1);
        for (const da in this.allcauhoi) {
          if (this.allcauhoi[da]['id'] === value) {
            console.log(value);
            this.allcauhoi.splice(parseInt(da), 1);
            break;
          }
        }
        console.log(this.allcauhoi);
       });
    }
  }
  getCauHoiMon(value: number) {
    this.listcauhoi.splice(0, this.listcauhoi.length);
    this.listcauhoi = this.allcauhoi.filter(function(item){
      if (item['mamon'] === value) {
        return item;
      }
    });
  }
  getAllMon() {
    this.listcauhoi = [...this.allcauhoi];
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
