import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.html'
})

export class NewProductComponent implements OnInit {
  newProductForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.newProductForm = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      description: new FormControl('', {
        validators: [Validators.required]
      }),
      imgUrl: new FormControl('', {
        validators: [Validators.required]
      }),
      price: new FormControl('', {
        validators: [Validators.required]
      }),
      sex: new FormControl('', {
        validators: [Validators.required]
      }),
      categoryList: new FormControl('', {
        validators: Validators.required
      }),
      itemsInStock: new FormControl('', {
        validators: Validators.required
      }),
      dateAdded: new FormControl('', {
        validators: Validators.required
      }),
      resealed: new FormControl('', {
        validators: Validators.required
      })
    });
  }

  onSubmit() {
    console.log(this.newProductForm);
  }
}
