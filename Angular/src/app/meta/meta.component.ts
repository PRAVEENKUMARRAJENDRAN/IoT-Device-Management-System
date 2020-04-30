import { Component } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent  {
  res: any[];
  json;
  json1: any[];


  constructor(private http: Http) {

   }
   ngOnInit() {
   //public getall(){
    // alert('error');
    const data = {
      "jsonrpc" : "2.0",
      "method" : "getall",
      "id" : "1",
      "params": {'argument' : 'something' }
  };


     // const headers = new Headers({'Content-Type':'application/json'});
     // this.http.post('http://localhost:80/jsonrpc',data,{headers:headers}).pipe(
     // map((res: Response)=> console.log(res)));
     // catch((error:Response) =>console.log(error)));

     // 1 success
    this.http.post('http://localhost:80/jsonrpc', data).subscribe( res =>  {
      this.json1= res.json();
      console.log(this.json1)
});
  //  this.json1 = this.json;
    //console.log(JSON.stringify(this.json1, null, 4));

    return this.json1

     // 2 try
     // this.http.post('http://localhost:80/jsonrpc',data).subscribe( Response => alert(this.json =Response.text()))

     // map((res: Response) => {
        // return res || {}; })

        // 1 success
        // return this.json
        // let a = JSON.stringify(this.json) ;
        // this.json = JSON.stringify(this.json);

    //return  this.json1;
    }
}
