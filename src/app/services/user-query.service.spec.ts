import { TestBed, inject } from '@angular/core/testing';

import { UserQueryService } from './user-query.service';

describe('UserQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserQueryService]
    });
  });

  it('should be created', inject([UserQueryService], (service: UserQueryService) => {
    expect(service).toBeTruthy();
  }));
});
