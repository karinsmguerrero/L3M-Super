import { TestBed } from '@angular/core/testing';

import { ShoppingManagmentService } from './shopping-managment.service';

describe('ShoppingManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingManagmentService = TestBed.get(ShoppingManagmentService);
    expect(service).toBeTruthy();
  });
});
