import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoProgressbarComponent } from './v-two-progressbar.component';

describe('VTwoProgressbarComponent', () => {
  let component: VTwoProgressbarComponent;
  let fixture: ComponentFixture<VTwoProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
