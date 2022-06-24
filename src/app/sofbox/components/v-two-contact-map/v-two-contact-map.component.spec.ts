import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoContactMapComponent } from './v-two-contact-map.component';

describe('VTwoContactMapComponent', () => {
  let component: VTwoContactMapComponent;
  let fixture: ComponentFixture<VTwoContactMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoContactMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoContactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
