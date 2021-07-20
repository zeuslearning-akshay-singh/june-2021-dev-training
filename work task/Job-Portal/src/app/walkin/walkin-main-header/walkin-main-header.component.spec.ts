import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinMainHeaderComponent } from './walkin-main-header.component';

describe('WalkinMainHeaderComponent', () => {
  let component: WalkinMainHeaderComponent;
  let fixture: ComponentFixture<WalkinMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinMainHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
