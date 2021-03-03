import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { AboutComponent } from './about.component';
import { NgxChangeThemeModule } from '@shared/components/ngx-change-theme/ngx-change-theme.module';
import { NgxchangeLanguageModule } from '@shared/components/ngx-change-language/ngx-change-language.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, TranslocoModule, NgxChangeThemeModule, NgxchangeLanguageModule],
  exports: [AboutComponent],
  providers: [],
})
export class AboutModule {}
