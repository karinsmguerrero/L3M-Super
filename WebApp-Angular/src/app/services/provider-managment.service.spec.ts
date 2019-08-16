import { TestBed } from '@angular/core/testing';

import { ProviderManagmentService } from './provider-managment.service';

describe('ProviderManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderManagmentService = TestBed.get(ProviderManagmentService);
    expect(service).toBeTruthy();
  });
});
