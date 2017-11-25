import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LophocphanService } from '../services/lophocphan.service';
import { QuanLiMonHocService } from '../services/quanlimonhoc.service';
@Component({
  selector: 'them-lophp',
  templateUrl: './themlophocphan.component.html',
  styleUrls: ['./themlophocphan.component.scss'],
  providers: [ LophocphanService,QuanLiMonHocService ]
})
// tslint:disable-next-line:component-class-suffix
export class ThemLopHPComponent  {
	// tslint:disable-next-line:indent
	constructor(
    private monhocservice: QuanLiMonHocService,
    private lophocphanservice: LophocphanService,
		// tslint:disable-next-line:indent
		private router: Router) {
    }
    public submit = true;
    public mon: any[];
    public lophp: any[];
	// tslint:disable-next-line:indent
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.monhocservice.getMonHoc().subscribe( data => {
      this.mon = data['mon'];
    });
    this.lophocphanservice.getlophocphan().subscribe ( data => {
      this.lophp = data['lophocphan'];
    });
  }
  themlophp(value: any) {
    this.lophp.forEach(element => {
      if ((element.malophp == value['lophp'])) {
        this.submit = false;
      }
    });
    if (this.submit) {
      this.submit = false;
     this.lophocphanservice.addLopHP(value).subscribe( data => {
        alert('Thêm thành công');
        this.router.navigate(['/xemdanhsachmon']);
     });
    }
    else {
      alert('Lớp HP đã tồn tại');
      this.submit = true;
    }
  }
}
