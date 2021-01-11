import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookresultsComponent } from './bookresults.component';

describe('BookresultsComponent', () => {
  let component: BookresultsComponent;
  let fixture: ComponentFixture<BookresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
