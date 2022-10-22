import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IglesiasComponent } from './iglesias.component';

describe('IglesiasComponent', () => {
  let component: IglesiasComponent;
  let fixture: ComponentFixture<IglesiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IglesiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IglesiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
