import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTransactionComponent } from './single-transaction.component';

describe('SingleTransactionComponent', () => {
  let component: SingleTransactionComponent;
  let fixture: ComponentFixture<SingleTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
