import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxchangeLanguageModule } from '@shared/components/ngx-change-language/ngx-change-language.module';
import { NgxChangeThemeModule } from '@shared/components/ngx-change-theme/ngx-change-theme.module';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutComponent],
        imports: [
          HttpClientTestingModule,
          TranslocoRootModule,
          NgxChangeThemeModule,
          NgxchangeLanguageModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
