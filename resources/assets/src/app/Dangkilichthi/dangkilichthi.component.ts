import { Component, OnInit } from '@angular/core';
import { QuanLiLichThiService } from '../services/quanlilichthi';
import { LophocphanService } from '../services/lophocphan.service';
import { LopService } from '../services/quanlilop.service';
import { Router } from '@angular/router';
import { NumberValidatorsService } from '../services/numberValidate.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dangki-lich',
  templateUrl: './dangkilichthi.component.html',
  styleUrls: ['./dangkilichthi.component.scss'],
  providers: [QuanLiLichThiService, LophocphanService, LopService, NumberValidatorsService],
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
  public submit = false;
  public tong_cauhoi: number;
  public date = new Date();
  public checkday = false;
  public checkcauhoi = false;
  public checkthoigianthi = false;
  public hienthileft = 0;
  public hienthiright = 10;
  public tongsoluong: number;
  public checkleft = true;
  public checkright = false;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.sinhvienlophocphan.getalllophocphanchuadkthi().subscribe( data => {
      this.mon = data['lophocphan'];
    });
    this.lopservice.getLop().subscribe( data => {
      this.lop = data['lop'];
    });
  }
  previous() {
    this.checkright = false;
    if (this.hienthileft - 10 === 0) {
      this.checkleft = true;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkleft = false;
    }
    this.hienthiright -= 10;
    this.hienthileft -= 10;
  }
  next() {
    this.checkleft = false;
    if (this.hienthiright + 10 < this.tongsoluong) {
      this.checkright = false;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkright = true;
    }
    this.hienthiright += 10;
    this.hienthileft += 10;
  }
  getmalophp(event) {
    this.hienthileft = 0;
    this.hienthiright = 10;
    this.checkleft = true;
    this.sinhvienlophocphan.gettongsinhvientheolophp(event.target.value).subscribe( data => {
      this.tongsoluong = data ['tongsinhvien'];
      if (this.hienthiright > data['tongsinhvien']) {
        this.checkright = true;
      }
    });
    this.sinhvienlophocphan.getdetail(event.target.value).subscribe( data => {
      this.listsinhvien = data['lophocphan'];
    });
    this.sinhvienlophocphan.getTongCauHoi(event.target.value).subscribe( data => {
      this.tong_cauhoi = data['tongcauhoi'];
    });
    (this.date.setHours(this.date.getHours() + 6) ) ;
    console.log(this.date.toJSON().split('Z')[0] ) ;
  }
  checkthoigian(event) {
    if (event.target.value < 10 ) {
      this.checkthoigianthi = true;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkthoigianthi = false;
      this.submit = true;
    }
  }
  validatengaythi(event) {
    if (event.target.value.toLocaleString() > this.date.toJSON().split('Z')[0]) {
      this.checkday = false;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkday = true;
      this.submit = true;
    }
  }
  checktongcauhoi(event) {
    if (event.target.value <= this.tong_cauhoi && event.target.value >= 5) {
      this.checkcauhoi = false;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkcauhoi = true;
      this.submit = true;
    }
  }
  themLichThi(value: any) {
    if ( this.checkday) {
      alert('Nhập lại thời gian thi phù hợp');
      this.submit = false;
    }
    if (this.checkcauhoi) {
      alert('Nhập lại số lượng câu hỏi phù hợp');
      this.submit = false;
    }
    if (this.checkthoigianthi) {
      this.submit = false;
      alert('Nhập lại tổng thời gian thi');
    }
    if (this.submit) {
      this.submit = false;
          value['mamon'] = this.listsinhvien[0].mon.id;
          this.lichthi.dangKiLichThi(value).subscribe( data => {
            alert('Đăng kí thành công');
            this.router.navigate(['/xemlichthi']);
          });
    }
  }
}
