import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kutup12Component } from './kutup12.component';

describe('Kutup12Component', () => {
  let component: Kutup12Component;
  let fixture: ComponentFixture<Kutup12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kutup12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kutup12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
