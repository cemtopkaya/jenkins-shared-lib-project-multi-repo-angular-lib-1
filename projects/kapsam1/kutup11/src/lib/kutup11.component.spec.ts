import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kutup11Component } from './kutup11.component';

describe('Kutup11Component', () => {
  let component: Kutup11Component;
  let fixture: ComponentFixture<Kutup11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kutup11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kutup11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
