import { TestBed } from '@angular/core/testing';

import { PeopledetailService } from './peopledetail.service';

describe('PeopledetailService', () => {
  let service: PeopledetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopledetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
