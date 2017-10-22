/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddEndroitComponent } from './add-endroit.component';

describe('AddEndroitComponent', () => {
  let component: AddEndroitComponent;
  let fixture: ComponentFixture<AddEndroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEndroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEndroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
