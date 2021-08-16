import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireStorageComponent } from './ng-fire-storage.component';

describe('NgFireStorageComponent', () => {
  let component: NgFireStorageComponent;
  let fixture: ComponentFixture<NgFireStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFireStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFireStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
