import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCmpComponent } from './details-cmp.component';

describe('DetailsCmpComponent', () => {
  let component: DetailsCmpComponent;
  let fixture: ComponentFixture<DetailsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
