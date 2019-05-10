import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from '../services/product-search.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { SearchParmeter } from '../models/search-parmeter';
import { HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  filterForm: FormGroup;
  public products: Product[]
  public searchParameter:SearchParmeter
  constructor(private formBuilder: FormBuilder,private poductsearchservice: ProductSearchService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      category:[null],
      brand : [null],
      color : [null],
      pricemin : [null],
      pricemax : [null]
  });
  }

OnSubmit(){
  this.searchParameter.category=this.filterForm.value.category;
  this.searchParameter.brand=this.filterForm.value.brand;
  this.searchParameter.color=this.filterForm.value.color;
  this.searchParameter.priceRangeLower=this.filterForm.value.pricemin;
  this.searchParameter.priceRangeUpper=this.filterForm.value.pricemax;


 this.products=this.poductsearchservice.getFilteredProducts<any>(this.searchParameter).subscribe((response)=>{

    this.products = response;
  });
  }

}
