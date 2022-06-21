import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoPortfolioBoxComponent } from './v-two-portfolio-box.component';

describe('VTwoPortfolioBoxComponent', () => {
  let component: VTwoPortfolioBoxComponent;
  let fixture: ComponentFixture<VTwoPortfolioBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoPortfolioBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoPortfolioBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
