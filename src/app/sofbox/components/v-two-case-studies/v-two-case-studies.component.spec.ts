import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoCaseStudiesComponent } from './v-two-case-studies.component';

describe('VTwoCaseStudiesComponent', () => {
  let component: VTwoCaseStudiesComponent;
  let fixture: ComponentFixture<VTwoCaseStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoCaseStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
