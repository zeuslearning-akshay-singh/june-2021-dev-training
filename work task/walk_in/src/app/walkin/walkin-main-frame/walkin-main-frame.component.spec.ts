import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinMainFrameComponent } from './walkin-main-frame.component';

describe('WalkinMainFrameComponent', () => {
  let component: WalkinMainFrameComponent;
  let fixture: ComponentFixture<WalkinMainFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinMainFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinMainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
