import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentosComponent } from './monumentos.component';

describe('MonumentosComponent', () => {
  let component: MonumentosComponent;
  let fixture: ComponentFixture<MonumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
