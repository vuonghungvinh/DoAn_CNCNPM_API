import { Component,OnInit } from '@angular/core';
import { QuanLiLichThiService } from '../services/quanlilichthi';
import { LophocphanService } from '../services/lophocphan.service';
import { LopService } from '../services/quanlilop.service';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dangki-lich',
  templateUrl: './dangkilichthi.component.html',
  styleUrls: ['./dangkilichthi.component.scss'],
  providers: [QuanLiLichThiService, LophocphanService, LopService],
})
export class DangkilichthiComponent {
  constructor(
    private lopservice: LopService,
    private lichthi: QuanLiLichThiService,
    private sinhvienlophocphan: LophocphanService,
    private router: Router) {
    }
  public listsinhvien: any[];
  public mon: any[];
  public lop: any[];
  public submit = true;
  public tong_cauhoi: number;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.sinhvienlophocphan.getlophocphanchuadkthi().subscribe( data => {
      this.mon = data['lophocphan'];
    });
    this.lopservice.getLop().subscribe( data => {
      this.lop = data['lop'];
    });
  }
  getmalophp(event) {
    this.sinhvienlophocphan.getdetail(event.target.value).subscribe( data => {
      this.listsinhvien = data['lophocphan'];
    });
    this.sinhvienlophocphan.getTongCauHoi(event.target.value).subscribe( data => {
      this.tong_cauhoi = data['tongcauhoi'];
    });
  }
  themLichThi(value: any) {
    value['mamon'] = this.listsinhvien[0].mon.id;
    if (this.submit) {
      this.lichthi.dangKiLichThi(value).subscribe( data => {
        alert('Đăng kí thành công');
        this.router.navigate(['/xemlichthi']);
      });
    }

  }
}
