import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Renderer2, Type } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Language } from '@shared/enums/language.enum';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';
import { NgxchangeLanguageComponent } from './ngx-change-language.component';

describe('NgxchangeLanguageComponent', () => {
  let component: NgxchangeLanguageComponent;
  let fixture: ComponentFixture<NgxchangeLanguageComponent>;
  let renderer: Renderer2;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxchangeLanguageComponent],
        imports: [TranslocoRootModule, HttpClientTestingModule],
        providers: [Renderer2],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxchangeLanguageComponent);
    component = fixture.componentInstance;
    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should init with pt-br language', () => {
    component.localStorageLanguage = Language.ptBR;

    component.ngOnInit();

    expect(component.isEnglish).toEqual(false);
  });

  it('should change language to pt-br', () => {
    component.onChangeLanguage(Language.ptBR);

    expect(component.isEnglish).toEqual(false);
  });

  it('should change toggle theme to pt-br', () => {
    jest.spyOn(component, 'onChangeLanguage');

    component.language = Language.en;
    component.onToggleLanguage();

    expect(component.isEnglish).toEqual(false);
    expect(component.onChangeLanguage).toBeCalledWith(Language.ptBR);
  });

  it('should change toggle theme to en', () => {
    jest.spyOn(component, 'onChangeLanguage');

    component.language = Language.ptBR;
    component.onToggleLanguage();

    expect(component.isEnglish).toEqual(true);
    expect(component.onChangeLanguage).toBeCalledWith(Language.en);
  });
});
