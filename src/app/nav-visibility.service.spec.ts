import { TestBed } from '@angular/core/testing';

import { NavVisibilityService } from './nav-visibility.service';

describe('NavVisibilityService', () => {
  let service: NavVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
