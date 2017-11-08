import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../services/sinhvien.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'xem-danhsach',
  templateUrl: './xemdanhsachsinhvien.component.html',
  styleUrls: ['./xemdanhsachsinhvien.component.scss'],
  providers: [SinhvienService]
})

export class XemDanhSachComponent implements OnInit {
  constructor(
    private studentservice: SinhvienService,
    private router: Router) {
}
  public students: any[];
  ngOnInit() {
    this.studentservice.getdanhsachsinhvien().subscribe(data => {
      this.students = data['students'];
      console.log('get data success');
    }, error => {
        console.log(error);
    });
  }
  xemTheoLop(event) {
    this.studentservice.getSinhVienLop(event.target.value).subscribe( data => {
      this.students = data['students'];
    });
  }
  deleteSinhVien(mssv: string){
    if (confirm('Bạn có chắc muốn xóa sinh vien này?') === true) {
      this.studentservice.deleteSinhVien(mssv).subscribe( data => {
        alert('Succsess');
        this.ngOnInit();
      });
    }
  }
}
