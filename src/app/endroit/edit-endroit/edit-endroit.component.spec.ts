/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditEndroitComponent } from './edit-endroit.component';

describe('EditEndroitComponent', () => {
  let component: EditEndroitComponent;
  let fixture: ComponentFixture<EditEndroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEndroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEndroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
