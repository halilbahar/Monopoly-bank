import { TestBed } from '@angular/core/testing';

import { NoGameGuard } from './no-game.guard';

describe('NoGameGuard', () => {
  let guard: NoGameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoGameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
