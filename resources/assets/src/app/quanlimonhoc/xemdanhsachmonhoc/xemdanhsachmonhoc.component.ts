import { Component, OnInit } from '@angular/core';
import { QuanLiMonHocService } from '../../services/quanlimonhoc.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'xemdanhsach-lop',
  templateUrl: './xemdanhsachmonhoc.component.html',
  providers: [QuanLiMonHocService]
})

export class XemdanhsachmonComponent implements OnInit {
  constructor(
    private monhocservice: QuanLiMonHocService) {

}
public mon: any[];
ngOnInit() {
    this.monhocservice.getMonHoc().subscribe(data => {
      this.mon = data['mon'];
    });
  }
}
