import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-mdi-icon',
  templateUrl: 'ngx-mdi-icon.component.html',
  styleUrls: ['ngx-mdi-icon.component.scss'],
})
export class NgxMdiIconComponent {
  @Input() path = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
  @Input() color: string | null = null;
  @Input() size: string | null = null;
}
