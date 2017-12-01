import { Component, OnInit } from '@angular/core';
import { XemLaiBaiThi } from '../services/xemlaibaithi.service';
import { LophocphanService } from '../services/lophocphan.service';
@Component({
  selector: 'testview-component',
  templateUrl: './reviewtest.component.html',
  styleUrls: ['./reviewtest.component.scss'],
  providers: [XemLaiBaiThi, LophocphanService]
})

export class ReViewTestComponent implements OnInit {
  public datas;
  public isready: boolean;
  public listketquathi = [];
  public listidmonhoc = [];
  public listlophp: any[];
  public listsinhvien: any[];
  public mssv = '';
  constructor(
    private xemlaibaihiService: XemLaiBaiThi,
    private lophocphanService: LophocphanService
  ) {
    this.isready = false;
  }

  ngOnInit() {
    this.xemlaibaihiService.list().subscribe(datas => {
      this.datas = datas;
      this.listketquathi = datas['listketquathi'];
      this.listketquathi.forEach(element => {
        if ( this.listidmonhoc.indexOf(element.dethi.mamon) === -1) {
          this.listidmonhoc.push(element.dethi.mamon);
        }
      });
    });
  }
  hienthilopHP(event) {
    this.listsinhvien = [];
    let i = 1;
    this.lophocphanService.getlophocphanmon(event.target.value).subscribe( data => {
      this.listlophp = data['lophocphan'];
      if (this.listlophp) {
        console.log(this.listlophp);
        this.listlophp.forEach(element => {
          if (i) {
            i = 0;
            console.log(element.malophp);
            this.getsinhvien(element.malophp);
          }
        });
      }
    });
  }
  getsinhvien(value: any) {
    this.isready = true;
    let idlichthi = '';
    this.datas.listlichthi.map( lichthi => {
      if (lichthi.malophp === value) {
        idlichthi = lichthi.id;
        return;
      }
    });
    this.listsinhvien = [];
    this.listketquathi.map( ketquathi => {
      if (ketquathi.dethi_lichthi.malichthi === idlichthi) {
        this.listsinhvien.push(ketquathi);
      }
    });
  }
  getLopHocPhan(idLichthi) {
    let malophocphan = '';
    this.datas.listlichthi.map( lichthi => {
      if (lichthi.id === idLichthi) {
       malophocphan = lichthi.malophp;
      }
    });
    return malophocphan;
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

  getMon(idMon: any) {
    let tenmon = '';
    this.datas.listmon.map(mon => {
      if (mon.id == idMon) {
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
