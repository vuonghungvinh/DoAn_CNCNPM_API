import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LophocphanService } from '../services/lophocphan.service';
@Component({
  selector: 'them-monhoc',
  templateUrl: './themonhoc.component.html',
  styleUrls: ['./themonhoc.component.scss'],
  providers: [ LophocphanService ]
})
// tslint:disable-next-line:component-class-suffix
export class ThemMonHocComponent  {
	// tslint:disable-next-line:indent
	constructor(
		private monhocservice: LophocphanService,
		// tslint:disable-next-line:indent
		private router: Router) {
    }
    public submit = true;
	// tslint:disable-next-line:indent
  // tslint:disable-next-line:use-life-cycle-interface
  addmon(value: any){
    if (this.submit) {
      this.submit = false;
      this.monhocservice.addMon(value).subscribe( data => {
        alert('Thêm thành công môn học: ' + value.name);
        this.router.navigate(['xemdanhsachlop']);
      });
    }
  }
}
