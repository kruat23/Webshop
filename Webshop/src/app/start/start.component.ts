import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = 'Webshop';

  constructor(private router: Router) { }

  goToProducts() {
    this.router.navigate(['products'])
  }

  ngOnInit(): void {
  }

}
