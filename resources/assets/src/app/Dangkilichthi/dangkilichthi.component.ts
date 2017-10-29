import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../services/liststudents';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dangki-lich',
  templateUrl: './dangkilichthi.component.html',
  styleUrls: ['./dangkilichthi.component.scss'],
  providers: [StudentsService],
})
export class DangkilichthiComponent {
  constructor(
    private listStudentsService: StudentsService) {
    }

  public listsinhvien: any[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.listStudentsService.getStudents().subscribe( data => {
      this.listsinhvien = data['students'];
    });
  }
}
