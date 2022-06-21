import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoSectionTitleComponent } from './v-two-section-title.component';

describe('VTwoSectionTitleComponent', () => {
  let component: VTwoSectionTitleComponent;
  let fixture: ComponentFixture<VTwoSectionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoSectionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
