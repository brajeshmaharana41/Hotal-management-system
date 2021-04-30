import { TestBed, inject } from '@angular/core/testing';

import { HoteldataserviceService } from './hoteldataservice.service';

describe('HoteldataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoteldataserviceService]
    });
  });

  it('should be created', inject([HoteldataserviceService], (service: HoteldataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
