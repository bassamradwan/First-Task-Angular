import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDDiplomasComponent } from './add-ddiplomas.component';

describe('AddDDiplomasComponent', () => {
  let component: AddDDiplomasComponent;
  let fixture: ComponentFixture<AddDDiplomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDDiplomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDDiplomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
