import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHeaderComponent } from './ngx-header.component';
import { NgxChangeThemeModule } from '../ngx-change-theme/ngx-change-theme.module';

@NgModule({
  declarations: [NgxHeaderComponent],
  exports: [NgxHeaderComponent],
  imports: [CommonModule, RouterModule, NgxChangeThemeModule],
})
export class NgxHeaderModule {}
