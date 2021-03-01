import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChangeThemeComponent } from './ngx-change-theme.component';
import { NgxMdiIconModule } from '../ngx-mdi-icon/ngx-mdi-icon.module';

@NgModule({
  declarations: [NgxChangeThemeComponent],
  exports: [NgxChangeThemeComponent],
  imports: [CommonModule, RouterModule, NgxMdiIconModule],
})
export class NgxChangeThemeModule {}
