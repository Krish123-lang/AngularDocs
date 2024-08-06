import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EihtComponent } from './eiht.component';

describe('EihtComponent', () => {
  let component: EihtComponent;
  let fixture: ComponentFixture<EihtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EihtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EihtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
