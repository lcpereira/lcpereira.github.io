import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { NgxChangeThemeModule } from '@shared/components/ngx-change-theme/ngx-change-theme.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, NgxChangeThemeModule],
  exports: [AboutComponent],
  providers: [],
})
export class AboutModule {}
