import { TestBed, ComponentFixtureAutoDetect, async } from '@angular/core/testing';

import { BioComponent } from './bio.component'

describe('BioComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      declarations: [
        BioComponent
      ]
    }).compileComponents();
  }));

  it('should create BioComponent component', async(() => {
    const fixture = TestBed.createComponent(BioComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain section as top-level node', async(() => {
    const fixture = TestBed.createComponent(BioComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('section')).toBeTruthy();
  }));

  it('bio should be enclosed with article node', async(() => {
    const fixture = TestBed.createComponent(BioComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('section>article')).toBeTruthy();
  }));

  it('bio elements shoud be enclosed with <p> inside article', async(() => {
    const fixture = TestBed.createComponent(BioComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('section>article p')).toBeTruthy();
  }));

  it(`should have as title 'Bio'`, async(() => {
    const fixture = TestBed.createComponent(BioComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bio');
  }));

})
