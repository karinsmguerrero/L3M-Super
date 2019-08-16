import { TestBed } from '@angular/core/testing';

import { OfficceManagmentService } from './officce-managment.service';

describe('OfficceManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficceManagmentService = TestBed.get(OfficceManagmentService);
    expect(service).toBeTruthy();
  });
});
