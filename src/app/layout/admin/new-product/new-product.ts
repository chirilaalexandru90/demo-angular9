import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.html'
})

export class NewProductComponent implements OnInit {
  newProductForm: FormGroup;
  edit = false;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.newProductForm = new FormGroup({
      id: new FormControl('', {
        validators: [Validators.required]
      }),
      title: new FormControl('GeneratedTitle1', {
        validators: [Validators.required]
      }),
      description: new FormControl('GeneratedDescription1', {
        validators: [Validators.required]
      }),
      imgUrl: new FormControl('img-02.jpg', {
        validators: [Validators.required]
      }),
      price: new FormControl(23.99, {
        validators: [Validators.required]
      }),
      sex: new FormControl('woman', {
        validators: [Validators.required]
      }),
      categoryList: new FormControl(['pants', 'shorts'], {
        validators: Validators.required
      }),
      itemsInStock: new FormControl(30, {
        validators: Validators.required
      }),
      dateAdded: new FormControl('2020-05-14T21:00:00.000Z', {
        validators: Validators.required
      }),
      resealed: new FormControl(false, {
        validators: Validators.required
      })
    });
  }

  onSubmit() {
    if (this.getFormId() === '') {
      this.productsService.createProduct(this.newProductForm.value)
        .subscribe(
          () => this.newProductForm.reset(),
          err => console.log(err));
    } else {
      if (this.getFormId()) {
        this.productsService
          .modifyProduct(this.getFormId(), this.newProductForm.value)
          .subscribe(
            () => {},
            e => console.log(e));
        this.edit = false;
        this.newProductForm.get('id').reset();
      }
    }
  }

  setEdit() {
    this.edit = !this.edit;
    this.newProductForm.get('id').reset();
  }

  private getFormId() {
    return this.newProductForm.value.id;
  }
}
