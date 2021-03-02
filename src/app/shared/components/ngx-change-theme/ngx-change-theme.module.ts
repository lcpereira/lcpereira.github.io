import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChangeThemeComponent } from './ngx-change-theme.component';

@NgModule({
  declarations: [NgxChangeThemeComponent],
  exports: [NgxChangeThemeComponent],
  imports: [CommonModule, RouterModule],
})
export class NgxChangeThemeModule {}
