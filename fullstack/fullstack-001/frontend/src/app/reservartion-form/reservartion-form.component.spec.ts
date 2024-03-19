import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservartionFormComponent } from './reservartion-form.component';

describe('ReservartionFormComponent', () => {
  let component: ReservartionFormComponent;
  let fixture: ComponentFixture<ReservartionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservartionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservartionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
