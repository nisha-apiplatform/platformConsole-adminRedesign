import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformConsoleComponent } from './platform-console.component';

describe('PlatformConsoleComponent', () => {
  let component: PlatformConsoleComponent;
  let fixture: ComponentFixture<PlatformConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
