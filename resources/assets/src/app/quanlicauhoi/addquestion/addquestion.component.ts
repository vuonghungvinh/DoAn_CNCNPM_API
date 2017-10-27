import { Component, OnInit } from '@angular/core';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-question-component',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss'],
  providers: [QuanLiCauHoi]
})

export class AddQuestionComponent {
constructor(
  private taomoicauhoi: QuanLiCauHoi,
  private router: Router) {

  }
  public cau= ['A', 'B', 'C', 'D', 'E', 'F'];
  public biendem = 2;
  public countlist = 0;
  public checkSubmit = true;
  public list_dapan = [
    { ten: this.cau[0], noi_dung: '', is_true: false },
    { ten: this.cau[1], noi_dung: '', is_true: false },
  ];
  public mon: any[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.taomoicauhoi.getMaMon().subscribe( data => {
      this.mon = data['mon'];
    });
  }
  checkSelect(i: number, check: boolean) {
       if (!this.list_dapan[i].is_true) {
          this.countlist += 1 ;
        }
        // tslint:disable-next-line:one-line
        else  {
          this.countlist -= 1;
        }
        if (this.countlist == this.list_dapan.length) {
          alert ( 'Hãy chọn ít nhất một đáp án sai.' );
          this.countlist -= 1;
          return false;
        }
        return true;
  }
  add_dapan() {
    if (this.list_dapan.length < 6) {
      this.list_dapan.push({ ten: this.cau[this.biendem], noi_dung: '', is_true: false });
      this.biendem += 1;
    }
  }

  remove_dapan() {
    if (this.list_dapan[this.list_dapan.length - 1].is_true) {
      this.countlist -= 1; }
    if (this.list_dapan.length > 2 && (this.countlist < (this.list_dapan.length - 1))) {

      this.list_dapan.splice(this.list_dapan.length - 1, 1);
      this.biendem -= 1;
    }
  }
  addQuestion(value: any) {
    if (this.countlist == 0) {
     alert('Chọn ít nhất một đáp án đúng.');
     return false;
    }
    // tslint:disable-next-line:one-line
    else if (this.checkSubmit) {
      this.checkSubmit = false;
      console.log(value);
      value['list_dap_an'] = this.list_dapan;

      this.taomoicauhoi.addQuestion(value).subscribe(data => {
        alert('Thêm câu hỏi thành công.');
        this.router.navigate(['/question']);
      });
      return true;
    }
  }
  navigate() {
    this.router.navigate(['/question']);
  }
}
