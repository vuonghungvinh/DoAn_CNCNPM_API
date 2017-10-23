import { Component, OnInit } from '@angular/core';
import { LopHocPhan } from '../services/xemdanhsachlophocphan';
import { Router } from '@angular/router';

@Component({
  selector: 'xemdanhsach-lop',
  templateUrl: './xemdanhsachlop.component.html',
  styleUrls: ['./xemdanhsachlop.component.scss'],
  providers: [LopHocPhan]
})

export class Xemdanhsachlop implements OnInit {
  constructor(
    private lopHocPhan: LopHocPhan) {

}
public mon: any[];
ngOnInit() {
    this.lopHocPhan.getLopHocPhan().subscribe(data => {
      this.mon = data['mon'];
    }, error => {
        console.log(error);
    });
}
 }