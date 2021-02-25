import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdescriptioncomponentComponent } from './bookdescriptioncomponent.component';

describe('BookdescriptioncomponentComponent', () => {
  let component: BookdescriptioncomponentComponent;
  let fixture: ComponentFixture<BookdescriptioncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdescriptioncomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdescriptioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
