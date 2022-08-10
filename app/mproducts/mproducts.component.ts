import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { mproducts } from './mproducts';
@Component({
  selector: 'app-mproducts',
  templateUrl: './mproducts.component.html',
  styleUrls: ['./mproducts.component.css'],
})
export class MproductsComponent implements OnInit {
  mproducts: Array<mproducts> = [];
  constructor(private product: PostService) {}

  ngOnInit(): void {}
}
