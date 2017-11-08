import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from '../../services/sinhvien.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { read, IWorkBook, IWorkSheet, utils } from 'ts-xlsx';
import * as XLSX from 'xlsx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'themexcel-sinhvien',
  templateUrl: './sinhvienexcelcomponent..html',
  styleUrls: ['./sinhvienexcelcomponent.scss'],
  providers: [ SinhvienService ]
})

export class SinhVienExcelComponent {
  constructor(private sinhivienservice: SinhvienService,
              private router: Router,
              public http: Http) {
   }
  files: FileList;
  filestring: string;
  public formData: FormData;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

  }
  onChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        this.formData = new FormData();
        this.formData.append('uploadFile', file, file.name);
        const headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({ headers: headers });

        // this.http.post(`http://localhost:8000/api/admin/students/uploadfile`, formData, options)
        //     .map(res => res.json())
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
  }
  addstudents(value: any) {
    this.sinhivienservice.uploadFile(this.formData).subscribe( data => {
      alert('success');
      this.router.navigate(['xemdanhsach']);
    });
 }
}

