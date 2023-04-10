import { TestBed } from '@angular/core/testing';

import { EventLibService } from './event-lib.service';

describe('EventLibService', () => {
  let service: EventLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
