import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballSuper } from './dragonball-super-page';

describe('Dragonball', () => {
  let component: DragonballSuper;
  let fixture: ComponentFixture<DragonballSuper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballSuper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballSuper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
