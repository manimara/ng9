import { TestBed } from '@angular/core/testing';

import { TodoServicesService } from './todo-services.service';

describe('TodoServicesService', () => {
  let service: TodoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
