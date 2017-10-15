import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Themlophocphan } from "./ThemLopHocPhan/themlophocphan.component"; 
import { XemDanhSach } from "./XemDanhSachSinhVien/xemdanhsach.component";
import { ThemSinhVien } from "./ThemSinhVien/themsinhvien.component";
import { Xemdanhsachlop } from "./XemDanhSachLopHocPhan/xemdanhsachlop.component";
import { Xemlichthi } from "./Xemlichthi/xemlichthi.component"; 
import { Dangkilichthi } from "./Dangkilichthi/dangkilichthi.component";
import { HeaderComponent } from "./header/header.component";





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    XemDanhSach,
    ThemSinhVien,
    Xemdanhsachlop,
    Themlophocphan,
    Xemlichthi,
    Dangkilichthi,
    HeaderComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
