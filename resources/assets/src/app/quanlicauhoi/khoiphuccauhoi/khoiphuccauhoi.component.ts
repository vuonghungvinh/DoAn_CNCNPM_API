import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'question-component',
  templateUrl: './khoiphuccauhoi.component.html',
  styleUrls: ['./khoiphuccauhoi.component.scss'],
  providers: [QuanLiCauHoi]
})

export class KhoiPhucCauHoiComponent {
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
    this.xemcauhoi.getCauHoiBiXoa().subscribe(data => {
      this.allcauhoi = data['listquestion'];
      this.listcauhoi = [...this.allcauhoi];
    });
  }
  phuchoicauhoi(value: number) {
    if (confirm('Bạn có chắc phục hồi câu hỏi này??') === true ) {
      this.xemcauhoi.phuchoicauhoi(value).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
  getCauHoiMon(event) {
    this.listcauhoi.splice(0, this.listcauhoi.length);
    this.listcauhoi = this.allcauhoi.filter(function(item){
      if (item['mamon'].toString() === event.target.value) {
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
