import { Component, OnInit } from '@angular/core';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';
import { Router } from '@angular/router';

@Component({
  selector: 'add-question-component',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss'],
  providers: [QuanLiCauHoi]
})

export class AddQuestionComponent {
constructor(
  private taomoicauhoi: QuanLiCauHoi,
  private router: Router){

  }
  public cau=['A','B','C']
  public list_dapan = [
    { ten: 'Cau '+this.cau[0], noi_dung: '', is_true: false },
    { ten: 'Cau '+this.cau[1], noi_dung: '', is_true: false }
  ];
  public mon: any[];
  ngOnInit() {
    this.taomoicauhoi.getMaMon().subscribe( data => {
      this.mon = data['mon'];
    });
  }

  add_dapan() {
    this.list_dapan.push({ ten: 'Cau '+this.cau[2], noi_dung: '', is_true: false });
  }

  remove_dapan() {
    if (this.list_dapan.length > 2) {
      this.list_dapan.splice(this.list_dapan.length - 1, 1);
    }
  }
  addQuestion(value: any) {
    console.log(value);
    value['list_dap_an'] = this.list_dapan;
    this.taomoicauhoi.addQuestion(value).subscribe(data=>{
      this.router.navigate(['/question']);
    });
  }
}
