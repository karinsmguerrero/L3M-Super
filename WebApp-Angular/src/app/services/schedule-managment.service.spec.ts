import { TestBed } from '@angular/core/testing';

import { ScheduleManagmentService } from './schedule-managment.service';

describe('ScheduleManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleManagmentService = TestBed.get(ScheduleManagmentService);
    expect(service).toBeTruthy();
  });
});
