/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditAvisComponent } from './edit-avis.component';

describe('EditAvisComponent', () => {
  let component: EditAvisComponent;
  let fixture: ComponentFixture<EditAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
