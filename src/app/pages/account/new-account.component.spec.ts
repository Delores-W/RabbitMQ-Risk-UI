import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccount.ComponentComponent } from './new-account.component.component';

describe('NewAccount.ComponentComponent', () => {
  let component: NewAccount.ComponentComponent;
  let fixture: ComponentFixture<NewAccount.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccount.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccount.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
