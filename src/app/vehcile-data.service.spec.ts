/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehcileDataService } from './vehcile-data.service';

describe('VehcileDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehcileDataService]
    });
  });

  it('should ...', inject([VehcileDataService], (service: VehcileDataService) => {
    expect(service).toBeTruthy();
  }));
});
