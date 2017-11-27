import { Component, OnInit } from '@angular/core';
import { XemLaiBaiThi } from '../services/xemlaibaithi.service';
@Component({
  selector: 'testview-component',
  templateUrl: './reviewtest.component.html',
  styleUrls: ['./reviewtest.component.scss'],
  providers: [XemLaiBaiThi]
})

export class ReViewTestComponent implements OnInit {
  public datas;
  public isready: boolean;
  public listketquathi = [];
  public mssv = '';
  constructor(
    private xemlaibaihiService: XemLaiBaiThi
  ) {
    this.isready = false;
  }

  ngOnInit() {
    this.xemlaibaihiService.list().subscribe(datas => {
      this.datas = datas;
      this.listketquathi = datas['listketquathi'];
      this.isready = true;
    });
  }

  getLop(idlop) {
    let tenlop = '';
    this.datas.listlop.map(lop => {
      if (lop.id === idlop) {
        tenlop = lop.tenlop;
      }
    });
    return tenlop;
  }

  getMon(idMon) {
    let tenmon = '';
    this.datas.listmon.map(mon => {
      if (mon.id === idMon) {
        tenmon = mon.tenmon;
      }
    });
    return tenmon;
  }
  search_mssv() {
    if (this.mssv.length > 0) {
      this.listketquathi = [];
      this.listketquathi = this.datas['listketquathi'].filter(kqt => {
        if (kqt.mssv.indexOf(this.mssv) >= 0) {
          return kqt;
        }
      });
    } else {
      this.listketquathi = this.datas['listketquathi'];
    }
  }
}
