import { TestBed, ComponentFixtureAutoDetect, async } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BioModule } from './bio/bio.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FlexLayoutModule,
        BioModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('logic', () => {
    it(`should have as title 'kornicameister.github.io'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('kornicameister.github.io');
    }));
  })

  describe('ui', () => {
    it('should have md-sidenav-container as root component', async () => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('md-sidenav-container')).toBeTruthy();
    });

    it('should have md-sidenav inside container', async() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('md-sidenav-container md-sidenav')).toBeTruthy();
    });

    it('should have md-toolbar inside container', async() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('md-sidenav-container md-toolbar')).toBeTruthy();
    });

    it('should have km-bio component inside aside', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('md-sidenav-container div>aside>km-bio')).toBeTruthy();
    }));
  })

});
