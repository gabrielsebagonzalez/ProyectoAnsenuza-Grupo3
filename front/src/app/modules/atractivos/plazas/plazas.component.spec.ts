import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazasComponent } from './plazas.component';

describe('PlazasComponent', () => {
  let component: PlazasComponent;
  let fixture: ComponentFixture<PlazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
