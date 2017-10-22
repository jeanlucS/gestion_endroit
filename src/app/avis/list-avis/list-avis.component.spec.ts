/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListAvisComponent } from './list-avis.component';

describe('ListAvisComponent', () => {
  let component: ListAvisComponent;
  let fixture: ComponentFixture<ListAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
