import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuanLiMonHocService } from '../services/quanlimonhoc.service';
@Component({
  selector: 'them-monhoc',
  templateUrl: './themmonhoc.component.html',
  styleUrls: ['./themmonhoc.component.scss'],
  providers: [ QuanLiMonHocService ]
})
// tslint:disable-next-line:component-class-suffix
export class ThemMonHocComponent  {
	// tslint:disable-next-line:indent
	constructor(
		private monhocservice: QuanLiMonHocService,
		// tslint:disable-next-line:indent
		private router: Router) {
    }
    public mon: any[];
    public submit = true;
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.monhocservice.getMonHoc().subscribe(data => {
        this.mon = data['mon'];
      });
    }
    addmon(value: any) {
      this.mon.forEach(element => {
        if ((element.tenmon == value['tenmon'])) {
          this.submit = false;
        }
      });
      if (this.submit) {
        this.submit = false;
       this.monhocservice.addMonHoc(value).subscribe( data => {
          alert('Thêm thành công');
          this.router.navigate(['/xemdanhsachmon']);
       }, error => {
        alert('Môn đã tồn tại');
        this.submit = true;
       });
      }
    }
	// tslint:disable-next-line:indent
  // tslint:disable-next-line:use-life-cycle-interface
}
