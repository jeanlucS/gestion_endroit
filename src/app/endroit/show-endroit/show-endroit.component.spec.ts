/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowEndroitComponent } from './show-endroit.component';

describe('ShowEndroitComponent', () => {
  let component: ShowEndroitComponent;
  let fixture: ComponentFixture<ShowEndroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEndroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEndroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
