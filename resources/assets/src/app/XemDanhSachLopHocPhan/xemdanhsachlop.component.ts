import { Component, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'xemdanhsach-lop',
  templateUrl: './xemdanhsachlop.component.html',
  styleUrls: ['./xemdanhsachlop.component.scss'],
  providers: [LophocphanService]
})

export class XemdanhsachlopHPComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private lopHocPhan: LophocphanService) {

}
public mon: any[];
public id_mon: any[];
ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.id_mon = params['id'];
    });
    this.lopHocPhan.getlophocphanmon(this.id_mon).subscribe(data => {
      this.mon = data['lophocphan'];
      if (this.mon.length < 1) {
        alert('Không có lớp học phần của môn này');
        this.router.navigate(['xemdanhsachmon']);
      }
    }, error => {
        console.log(error);
    });

  }
  xoaLopHocPhan(value: any) {
    if (confirm('Bạn muốn xóa lớp HP ' + value) === true ) {
      this.lopHocPhan.deleteLopHP(value).subscribe( data => {
        this.ngOnInit();
      }, error => {
        alert('Lớp đã đk thi, không thể xóa');
      });
    }
  }
}
