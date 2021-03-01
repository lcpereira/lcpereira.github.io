import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from '@shared/enums/theme.enum';

@Component({
  selector: 'ngx-header',
  templateUrl: 'ngx-header.component.html',
  styleUrls: ['ngx-header.component.scss'],
})
export class NgxHeaderComponent implements OnInit {
  @Output() changeTheme = new EventEmitter<Theme>();

  theme: Theme = Theme.light;

  constructor() {}

  ngOnInit(): void {}

  onChangeTheme(toggleEnabled: boolean): void {
    this.theme = toggleEnabled ? Theme.dark : Theme.light;
    this.changeTheme.emit(this.theme);
  }
}
