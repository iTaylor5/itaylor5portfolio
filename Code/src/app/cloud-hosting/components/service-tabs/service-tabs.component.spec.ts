import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTabsComponent } from './service-tabs.component';

describe('ServiceTabsComponent', () => {
  let component: ServiceTabsComponent;
  let fixture: ComponentFixture<ServiceTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
