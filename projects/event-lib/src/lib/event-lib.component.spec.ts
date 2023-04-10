import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLibComponent } from './event-lib.component';

describe('EventLibComponent', () => {
  let component: EventLibComponent;
  let fixture: ComponentFixture<EventLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
