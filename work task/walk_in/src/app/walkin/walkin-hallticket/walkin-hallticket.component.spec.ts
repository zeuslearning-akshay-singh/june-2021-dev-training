import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinHallticketComponent } from './walkin-hallticket.component';

describe('WalkinHallticketComponent', () => {
  let component: WalkinHallticketComponent;
  let fixture: ComponentFixture<WalkinHallticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinHallticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinHallticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
