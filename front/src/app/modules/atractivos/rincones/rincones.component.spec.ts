import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinconesComponent } from './rincones.component';

describe('RinconesComponent', () => {
  let component: RinconesComponent;
  let fixture: ComponentFixture<RinconesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RinconesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
