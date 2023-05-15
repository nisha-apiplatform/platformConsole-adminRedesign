import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformConsoleConfigurationComponent } from './platform-console-configuration.component';

describe('PlatformConsoleConfigurationComponent', () => {
  let component: PlatformConsoleConfigurationComponent;
  let fixture: ComponentFixture<PlatformConsoleConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformConsoleConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformConsoleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
