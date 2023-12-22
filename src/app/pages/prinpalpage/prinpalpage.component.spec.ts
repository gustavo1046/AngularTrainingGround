import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinpalpageComponent } from './prinpalpage.component';

describe('PrinpalpageComponent', () => {
  let component: PrinpalpageComponent;
  let fixture: ComponentFixture<PrinpalpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinpalpageComponent]
    });
    fixture = TestBed.createComponent(PrinpalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
