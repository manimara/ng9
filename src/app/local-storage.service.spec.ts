import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  var timerCallback;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    timerCallback = jasmine.createSpy('timerCallback');
    jasmine.clock().install()
  });

  afterEach(()=>{
    jasmine.clock().uninstall();
  })
  it('should behave...', () => {
    setTimeout(()=>{
      timerCallback();
    }, 100)
    expect(timerCallback).not.toHaveBeenCalled();
    jasmine.clock().tick(101);
    expect(timerCallback).toHaveBeenCalled();

    // expect().toEqual(5);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' value should be empty', () => {
    expect(service.getJsonToken()).toEqual(null);
  });
  it('set value to be  `my value`', () => {
    const val = "my value";
    expect(service.setJsonToken(val)).toHaveBeenCalled();
  });

  it('value should be `my value`', () => {
    const val = "my value"
    expect(service.getJsonToken()).toEqual(val);
  });
  it('getpromise should be defined', () => {
    expect(service.getPromise()).toBeDefined();
  });

  it('getpromise value should be 5', () => {
    // expect(service.getPromise()).toBe(5);
  });

});
