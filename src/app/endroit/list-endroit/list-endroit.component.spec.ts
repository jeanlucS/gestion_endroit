/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListEndroitComponent } from './list-endroit.component';

describe('ListEndroitComponent', () => {
  let component: ListEndroitComponent;
  let fixture: ComponentFixture<ListEndroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEndroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEndroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
