import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMdiIconComponent } from './ngx-mdi-icon.component';

@NgModule({
  declarations: [NgxMdiIconComponent],
  exports: [NgxMdiIconComponent],
  imports: [CommonModule, RouterModule],
})
export class NgxMdiIconModule {}
