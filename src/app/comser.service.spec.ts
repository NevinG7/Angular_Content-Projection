import { TestBed } from '@angular/core/testing';

import { ComserService } from './comser.service';

describe('ComserService', () => {
  let service: ComserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
