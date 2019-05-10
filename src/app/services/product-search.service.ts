import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { SearchParmeter } from '../models/search-parmeter';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
 

  products:Product[]=[];


  constructor(private http:HttpClient) { }
  


   getFilteredProducts<any>(searchParameter: SearchParmeter) {
    let params = new HttpParams();
    params = params.append("category", searchParameter.category);
    params = params.append("category", searchParameter.brand);
    params = params.append("category", searchParameter.color);
    let  headers= new HttpHeaders({
          'Content-Type':  'application/json',
        })
        let url='http://localhost:9990/search';
        return this.http.get<any>(url,{ observe: "response", params }
          );
    return "hi";
    //throw new Error("Method not implemented.");
  }
  

}
