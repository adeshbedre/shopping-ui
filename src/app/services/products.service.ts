/**
 * Created by andrew.yang on 7/27/2017.
 */

import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

    constructor(public http: Http) { }

    public getProducts(){
        let dataURL = "http://3.91.64.198:8080/findAllProducts";
        return this.http.get(dataURL)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}