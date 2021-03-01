import { Component } from '@angular/core';
import { Theme } from '@shared/enums/theme.enum';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = Theme.light;
  title = 'lcpereira';
  themeEnum = Theme;
}
