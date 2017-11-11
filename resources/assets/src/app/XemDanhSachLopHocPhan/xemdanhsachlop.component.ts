import { Component, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'xemdanhsach-lop',
  templateUrl: './xemdanhsachlop.component.html',
  styleUrls: ['./xemdanhsachlop.component.scss'],
  providers: [LophocphanService]
})

export class XemdanhsachlopHPComponent implements OnInit {
  constructor(
    private lopHocPhan: LophocphanService) {

}
public mon: any[];
ngOnInit() {
    this.lopHocPhan.getlophocphan().subscribe(data => {
      this.mon = data['lophocphan'];
    }, error => {
        console.log(error);
    });
  }
  xoaLopHocPhan(value: any) {
    if (confirm('Bạn muốn xóa lớp HP ' + value) === true ) {
      this.lopHocPhan.deleteLopHP(value).subscribe( data => {
        this.ngOnInit();
      }, error => {
        alert('Không thể xóa lớp này');
      });
    }
  }
}
