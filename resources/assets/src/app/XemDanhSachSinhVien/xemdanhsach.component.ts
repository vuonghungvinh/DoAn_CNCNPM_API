import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/liststudents';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'xem-danhsach',
  templateUrl: './xemdanhsach.component.html',
  styleUrls: ['./xemdanhsach.component.scss'],
  providers: [StudentsService]
})

export class XemDanhSach implements OnInit {
  constructor(
    private studentservice: StudentsService,
    private router: Router) {
}
  public students: any[];
  ngOnInit() {
    this.studentservice.getStudents().subscribe(data => {
      this.students = data['students'];
    }, error => {
        console.log(error);
    });
  }
  xemTheoLop(event){
    this.studentservice.getSinhVienLop(event.target.value).subscribe( data =>{
      this.students = data['students'];
    });
  }
  deleteSinhVien(mssv: string){
    if (confirm('Bạn có chắc muốn xóa sinh vien này?') === true) {
      this.studentservice.deleteSinhVien(mssv).subscribe( data => {
        alert("Succsess");
        this.ngOnInit();
      });
    }
  }
}
