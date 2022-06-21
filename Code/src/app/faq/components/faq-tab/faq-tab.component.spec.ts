import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTabComponent } from './faq-tab.component';

describe('FaqTabComponent', () => {
  let component: FaqTabComponent;
  let fixture: ComponentFixture<FaqTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
