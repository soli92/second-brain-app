import { TestBed } from '@angular/core/testing';

import { ChuckNorrisJokesService } from './chuck-norris-jokes.service';

describe('ChuckNorrisJokesService', () => {
  let service: ChuckNorrisJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckNorrisJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
