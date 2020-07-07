import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
export class ToasterService {
  constructor(public snackBar: MatSnackBar) {
  }

  displayToaster(
    message: string,
    action: string,
    cssClass: string,
    duration: number
  ) {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [`${cssClass}`]
    });
  }
}
