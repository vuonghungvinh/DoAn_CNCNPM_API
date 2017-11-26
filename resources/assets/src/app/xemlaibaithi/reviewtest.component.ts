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
  constructor(
    private xemlaibaihiService: XemLaiBaiThi
  ) {
    this.isready = false;
  }

  ngOnInit() {
    this.xemlaibaihiService.list().subscribe(datas => {
      this.datas = datas;
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
}
