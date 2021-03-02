import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { NgxChangeThemeModule } from '../ngx-change-theme/ngx-change-theme.module';

import { NgxHeaderComponent } from './ngx-header.component';

describe('NgxHeaderComponent', () => {
  let component: NgxHeaderComponent;
  let fixture: ComponentFixture<NgxHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxHeaderComponent],
        imports: [NgxChangeThemeModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
