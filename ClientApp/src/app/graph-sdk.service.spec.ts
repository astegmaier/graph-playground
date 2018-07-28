import { TestBed, inject } from '@angular/core/testing';

import { GraphSdkService } from './graph-sdk.service';

describe('GraphSdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphSdkService]
    });
  });

  it('should be created', inject([GraphSdkService], (service: GraphSdkService) => {
    expect(service).toBeTruthy();
  }));
});
