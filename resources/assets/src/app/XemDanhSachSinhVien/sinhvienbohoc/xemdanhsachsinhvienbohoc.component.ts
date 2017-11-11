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
  public lop: any[];
  ngOnInit() {
    this.studentservice.getSinhVienNghiHoc().subscribe(data => {
      this.students = data['students'];
      console.log('get data success');
    }, error => {
        console.log(error);
    });
    // this.lopservice.getLop().subscribe(data => {
    //   this.lop = data['lop'];
    // }, error => {
    //   console.log(error);
    // });
  }
  // xemTheoLop(event) {
  //   console.log(event.target.value);
  //   this.studentservice.getSinhVienLop(event.target.value).subscribe( data => {
  //     this.students = data['students'];
  //   });
  // }
  // deleteSinhVien(mssv: string) {
  //   if (confirm('Bạn có chắc muốn xóa sinh vien này?') === true) {
  //     this.studentservice.deleteSinhVien(mssv).subscribe( data => {
  //       alert('Succsess');
  //       this.ngOnInit();
  //     });
  //   }
  // }
}
