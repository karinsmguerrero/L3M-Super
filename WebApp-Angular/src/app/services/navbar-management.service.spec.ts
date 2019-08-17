import { TestBed } from '@angular/core/testing';

import { NavbarManagementService } from './navbar-management.service';

describe('NavbarManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarManagementService = TestBed.get(NavbarManagementService);
    expect(service).toBeTruthy();
  });
});
