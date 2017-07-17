import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCmpComponent } from './list-cmp.component';

describe('ListCmpComponent', () => {
  let component: ListCmpComponent;
  let fixture: ComponentFixture<ListCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
