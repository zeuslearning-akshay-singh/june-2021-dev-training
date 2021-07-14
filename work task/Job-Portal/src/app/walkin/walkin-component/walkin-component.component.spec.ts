import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinComponentComponent } from './walkin-component.component';

describe('WalkinComponentComponent', () => {
  let component: WalkinComponentComponent;
  let fixture: ComponentFixture<WalkinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
