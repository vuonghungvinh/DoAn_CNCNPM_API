import { Component, OnInit } from '@angular/core';
import { QuanLiLichThiService } from '../services/quanlilichthi';

@Component({
  selector: 'xem-lichthi',
  templateUrl: './xemlichthi.component.html',
  styleUrls: ['./xemlichthi.component.scss'],
  providers: [QuanLiLichThiService],
})

export class Xemlichthi {
  constructor(
    private xemlichthi: QuanLiLichThiService) {

    }
  public listlichthi: any[];
  ngOnInit() {
    this.xemlichthi.getDanhSachLichThi().subscribe( data => {
      this.listlichthi = data['listlichthi'];
    });
  }
}
