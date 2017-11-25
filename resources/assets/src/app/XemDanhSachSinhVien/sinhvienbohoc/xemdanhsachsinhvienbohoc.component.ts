import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../../services/sinhvien.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LopService } from '../../services/quanlilop.service';
@Component({
  selector: 'component-sinhvienbohoc',
  templateUrl: './xemdanhsachsinhvienbohoc.component.html',
  styleUrls: ['./xemdanhsachsinhvienbohoc.component.scss'],
  providers: [SinhvienService,
              LopService]
})

export class SinhVienBoHocComponent implements OnInit {
  constructor(
    private lopservice: LopService,
    private studentservice: SinhvienService,
    private router: Router) {
}
  public students: any[];
  public allstudents: any[];
  public checkstartday = false;
  public checkendday = false;
  public ngaybatdau = new Date().toJSON().split('T')[0];
  public ngayketthuc = new Date().toJSON().split('T')[0];
  public maxday = new Date().toJSON().split('T')[0];
  ngOnInit() {
    this.studentservice.getSinhVienNghiHoc().subscribe(data => {
      this.allstudents = data['students'];
      this.students = [...this.allstudents];
      console.log('get data success');
    }, error => {
        console.log(error);
    });
  }
  change(value) {

   // tslint:disable-next-line:one-line

   // tslint:disable-next-line:one-line
    if (this.ngayketthuc > this.maxday) {
    this.checkendday = true;
    if (this.ngaybatdau > this.maxday) {
      this.checkstartday = true;
     }
     this.students.splice(0, this.students.length);
    return false;
   }
   // tslint:disable-next-line:one-line
   if (this.ngayketthuc < this.ngaybatdau   ) {
    alert('Vui lòng chọn khoảng thời gian hợp lí');
    this.students.splice(0, this.students.length);
    return false;
  }
   else {
     this.checkstartday = false;
     this.checkendday = false;
     this.students.splice(0, this.students.length);
     console.log(new Date((new Date(this.ngayketthuc)).getTime() + (60 * 60 * 24 * 1000)).toJSON().split('T')[0]);
     for (const da in this.allstudents) {
      // tslint:disable-next-line:max-line-length
      if (this.allstudents[da]['updated_at'] < new Date((new Date(this.ngayketthuc)).getTime() + (60 * 60 * 24 * 1000)).toJSON().split('T')[0] &&
       this.allstudents[da]['updated_at'] > this.ngaybatdau) {
        this.students.push(this.allstudents[da]);
      }
    }
   }
  }
}
