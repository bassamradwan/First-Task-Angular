import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDiplomasComponent } from './get-diplomas.component';

describe('GetDiplomasComponent', () => {
  let component: GetDiplomasComponent;
  let fixture: ComponentFixture<GetDiplomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDiplomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDiplomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
