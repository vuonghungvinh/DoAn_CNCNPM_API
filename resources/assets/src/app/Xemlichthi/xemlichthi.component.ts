import { Component, OnInit } from '@angular/core';
import { QuanLiLichThiService } from '../services/quanlilichthi';
import { Router } from '@angular/router';
@Component({
  selector: 'xem-lichthi',
  templateUrl: './xemlichthi.component.html',
  styleUrls: ['./xemlichthi.component.scss'],
  providers: [QuanLiLichThiService],
})

export class Xemlichthi {
  constructor(
    private xemlichthi: QuanLiLichThiService,
    private route: Router) {
    }
  public listlichthi: any[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.xemlichthi.getDanhSachLichThi().subscribe( data => {
      this.listlichthi = data['listlichthi'];
    });
  }
  deleteLichthi(id: number) {
    if ((confirm('Bạn chắc chắn muốn xóa') === true)) {
      this.xemlichthi.deleteLichThi(id).subscribe( data => {
        this.ngOnInit();
      }, error => {
        alert('Lớp này đã thi, không thể xóa');
      });
    }
  }
}
