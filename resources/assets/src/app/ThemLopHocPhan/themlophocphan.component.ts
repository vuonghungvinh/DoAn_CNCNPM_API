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
  ngOnInit() {
    this.lophocphan.getMon().subscribe( data => {
      this.mon = data['mon'];
    })
  }
  getIdMon(event){
    this.lophocphan.getSinhVienMon(event.target.value).subscribe( data => {
      this.sinhvien = data ['sinhvien'];
    });
  }
  getThongtin(value : any){
    console.log(value);
  }
}
