import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecomplaintComponent } from './deletecomplaint.component';

describe('DeletecomplaintComponent', () => {
  let component: DeletecomplaintComponent;
  let fixture: ComponentFixture<DeletecomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
