import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListProductsService } from '../utils/list-products.service';
import { NewTransactionService } from '../utils/new-transaction.service';
import { formatDate } from '@angular/common';

export class Products {
  constructor(
    public id: String,
    public name: String,
    public cost: Number,    
  ) { }
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Products[];
  date = new Date();
  format_date = '';

  constructor(private router: Router, private listService: ListProductsService, private addService: NewTransactionService) { 
    this.format_date = formatDate(this.date, 'yyyy-MM-dd hh:mm:ss a', 'en-US');
  }

  goToStart() {
    this.router.navigate(['start'])
  }

  listProducts() {
    this.listService.list().subscribe(data => {
      console.log('This came from the NodeJS server: ', data);
      this.products = data;
    }, error => {
      console.log('Sorry we encountered a problem: ', error);
    });
  }

  addTransaction() {
    this.addService.add().subscribe(transaction => {
      console.log('Transaction added.');
      console.log('This came from the Spring server: ', transaction);                          
    }, error => {
      console.log('Sorry we encountered a problem: ', error);
    });
  }

  ngOnInit(): void {
    this.listProducts();
  }

}
