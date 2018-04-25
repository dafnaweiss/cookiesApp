import { TestBed, inject } from '@angular/core/testing';

import { OutpostService } from './outpost.service';

describe('OutpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutpostService]
    });
  });

  it('should be created', inject([OutpostService], (service: OutpostService) => {
    expect(service).toBeTruthy();
  }));
});
