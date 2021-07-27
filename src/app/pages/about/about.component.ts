import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private translocoService: TranslocoService) {}

  get language(): string {
    return this.translocoService.getActiveLang();
  }
}
