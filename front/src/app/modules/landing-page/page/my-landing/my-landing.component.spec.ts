import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLandingComponent } from './my-landing.component';

describe('MyLandingComponent', () => {
  let component: MyLandingComponent;
  let fixture: ComponentFixture<MyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
