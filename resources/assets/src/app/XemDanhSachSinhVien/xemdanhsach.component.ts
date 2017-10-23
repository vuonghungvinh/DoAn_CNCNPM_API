import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/liststudents';
import { Router } from '@angular/router';

@Component({
  selector: 'xem-danhsach',
  templateUrl: './xemdanhsach.component.html',
  styleUrls: ['./xemdanhsach.component.scss'],
  providers: [StudentsService]
})

export class XemDanhSach implements OnInit {
  constructor(
    private studentservice: StudentsService) {

}
public students: any[];
ngOnInit() {
    this.studentservice.getStudents().subscribe(data => {
      this.students = data['students'];
    }, error => {
        console.log(error);
    });
}
}