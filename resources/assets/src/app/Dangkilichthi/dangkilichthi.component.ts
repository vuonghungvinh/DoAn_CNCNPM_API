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
  public submit = true;
  public tong_cauhoi: number;
  public date = new Date();
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.sinhvienlophocphan.getalllophocphanchuadkthi().subscribe( data => {
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
    (this.date.setHours(this.date.getHours() + 6) ) ;
    console.log(this.date.toJSON().split('Z')[0] ) ;
  }
  themLichThi(value: any) {
    if (this.submit) {
      this.submit = false;
      if (value['ngaydangki'].toLocaleString() > this.date.toJSON().split('Z')[0]) {
        if (value['tongcauhoi'] <= this.tong_cauhoi && value['tongcauhoi'] >= 5) {
          value['mamon'] = this.listsinhvien[0].mon.id;
          this.lichthi.dangKiLichThi(value).subscribe( data => {
            alert('Đăng kí thành công');
            this.router.navigate(['/xemlichthi']);
          });
        }
        else {
          alert('Số lượng câu hỏi lớn hơn 5 và nhỏ hơn tổng câu hỏi');
          this.submit = true;
        }
      }
      else {
        alert('Vui lòng chọn thời gian thi hợp lí');
        this.submit = true;
      }
    }
  }
}
