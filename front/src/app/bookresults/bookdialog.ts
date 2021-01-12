import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ImageData {
  title: string;
  url: string;
}


@Component({
  selector: 'app-bookdialog',
  templateUrl: 'bookdialog.html',
})
export class BookdialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageData) {}
}
