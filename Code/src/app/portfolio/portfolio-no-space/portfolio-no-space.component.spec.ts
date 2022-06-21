import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNoSpaceComponent } from './portfolio-no-space.component';

describe('PortfolioNoSpaceComponent', () => {
  let component: PortfolioNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
