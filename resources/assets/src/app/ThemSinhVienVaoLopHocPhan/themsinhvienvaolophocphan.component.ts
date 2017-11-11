import { Component, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'them-lop',
  templateUrl: './themsinhvienvaolophocphan.component.html',
  styleUrls: ['./themsinhvienvaolophocphan.component.scss'],
  providers: [LophocphanService]
})
export class ThemsinhvienvaolophocphanComponent {
  constructor(
    private lophocphan: LophocphanService,
    private router: Router) {
    }
    public mon: any[];
    public sinhvien: any[];
    public idmon: number;
    public submit = true;
    public malophp: string;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.lophocphan.getlophocphan().subscribe( data => {
      this.mon = data['lophocphan'];
    });
  }
  getMaLopHP(event) {
    this.lophocphan.getSinhVienMonKhongThuocLopHP(event.target.value).subscribe( data => {
      this.sinhvien = data ['sinhvien'];
      this.malophp = event.target.value;
      this.mon.forEach(element => {
        if (element.malophp === this.malophp) {
          this.idmon = element.mamon;
        }
      });
    });
  }
  themSinhVien(value: any) {
    value['mamon'] = this.idmon;
    value['malophp'] = this.malophp;
    if (this.submit) {
      this.submit = false;
      this.lophocphan.addSinhVienVaoLopHP(value).subscribe( data => {
        alert('Thêm  thành công.');
        this.router.navigate(['/xemdanhsachlophocphan']);
      });
    }

    console.log(value);

  }
}
