import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';  


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  apiURLProducts = environment.apiUrl + 'products';

  constructor(private http: HttpClient) {}

  getProducts(categoriesFilter?:any[]): Observable<Product[]> {
    // return this.http.get<Product[]>(this.apiURLProducts);

    let params = new HttpParams();
    
    if (categoriesFilter) {
      params = params.append('categories', categoriesFilter.join(','));
    }
    
    return this.http.get<Product[]>(this.apiURLProducts, { params: params });


    
  }


  createProduct(product:any): Observable<Product>{
     return this.http.post<Product>(this.apiURLProducts,product);
  }



  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLProducts}/${productId}`);
  }


  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiURLProducts}/${productId}`);
  }


  updateProduct(product: any,product_id:string): Observable<Product> {
    return this.http.put<Product>(`${this.apiURLProducts}/${product_id}`, product);
  }


  getProductsCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLProducts}/get/count`)
      .pipe(map((objectValue: any) => objectValue.productCount));
  }


  getFeaturedProducts(count: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURLProducts}/get/featured/${count}`);
  }
  


}
 