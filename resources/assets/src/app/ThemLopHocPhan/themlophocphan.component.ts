import { Component, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'them-lop',
  templateUrl: './themlophocphan.component.html',
  styleUrls: ['./themlophocphan.component.scss'],
  providers: [LophocphanService]
})
export class Themlophocphan {
  constructor(
		private lophocphan: LophocphanService,
		private router: Router) {
    }
    public mon: any[];
    public sinhvien: any[];
    public idmon: number;
  ngOnInit() {
    this.lophocphan.getMon().subscribe( data => {
      this.mon = data['mon'];
    })
  }
  getIdMon(event){
    this.lophocphan.getSinhVienMonKhongThuocMon(event.target.value).subscribe( data => {
      this.sinhvien = data ['sinhvien'];
      this.idmon = event.target.value;
    });
  }
  getThongtin(value : any){
    value['mamon'] = this.idmon;
    this.lophocphan.addSinhVienVaoMon(value).subscribe( data =>{
      alert('Thêm  thành công.');
      this.router.navigate(['/xemdanhsachlop']);
    });
    console.log(value);

  }
}
