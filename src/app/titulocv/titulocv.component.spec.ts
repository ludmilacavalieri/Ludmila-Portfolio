import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulocvComponent } from './titulocv.component';

describe('TitulocvComponent', () => {
  let component: TitulocvComponent;
  let fixture: ComponentFixture<TitulocvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulocvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulocvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
