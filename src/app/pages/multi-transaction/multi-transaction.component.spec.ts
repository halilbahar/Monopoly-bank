import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTransactionComponent } from './multi-transaction.component';

describe('MultiTransactionComponent', () => {
  let component: MultiTransactionComponent;
  let fixture: ComponentFixture<MultiTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
