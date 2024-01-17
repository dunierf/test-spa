import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoStyleButtonComponent } from './no-style-button.component';

describe('NoStyleButtonComponent', () => {
  let component: NoStyleButtonComponent;
  let fixture: ComponentFixture<NoStyleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoStyleButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoStyleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
