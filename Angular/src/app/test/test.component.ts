import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  res: any[];
  json1;
  json;
  val;
  art;
  latitudem;
  longitudem;
  sidm;
  i:number;
  j:number;
  k;


  constructor(private http: Http) {

   }
   ngOnInit() {
   //public getall(){
    // alert('error');
    const data = {
      "jsonrpc" : "2.0",
      "method" : "loc",
      "id" : "5",
      "params": {'argument' : 'something' }
  };


     // const headers = new Headers({'Content-Type':'application/json'});
     // this.http.post('http://localhost:80/jsonrpc',data,{headers:headers}).pipe(
     // map((res: Response)=> console.log(res)));
     // catch((error:Response) =>console.log(error)));

     // 1 success .subscribe( res => this.json1 = res.json());
   //  this.http.post('http://localhost:80/jsonrpc', data).subscribe( res => this.art = console.log(typeof(res.json().result)));
     this.http.post('http://localhost:80/jsonrpc', data).subscribe( res =>  {
       this.json= res.json();
       //this.art= JSON.stringify(this.json, null, 4);
       //console.log(this.art);

       console.log(this.json.result)
       for(this.i=0;this.i<5;this.i++){
        for(this.j=0;this.j<3;this.j++){
          console.log(this.latitudem=this.json.result[this.i][this.j])
          //console.log(this.longitudem=this.json.result[this.i][this.j])
           //console.log(this.sidm=this.json.result[this.i][this.j])

        }


       }

      /*
       console.log(this.latitudem=this.json.result[0][0])
       console.log(this.longitudem=this.json.result[0][1])
       console.log(this.sidm=this.json.result[0][2])
       console.log(this.latitudem=this.json.result[1][0])
       console.log(this.longitudem=this.json.result[1][1])
       console.log(this.sidm=this.json.result[1][2])
       console.log(this.latitudem=this.json.result[2][0])
       console.log(this.longitudem=this.json.result[2][1])
       console.log(this.sidm=this.json.result[2][2])
       console.log(this.latitudem=this.json.result[3][0])
       console.log(this.longitudem=this.json.result[3][1])
       console.log(this.sidm=this.json.result[3][2])
       console.log(this.latitudem=this.json.result[4][0])
       console.log(this.longitudem=this.json.result[4][1])
       console.log(this.sidm=this.json.result[4][2])

*/

      // console.log(JSON.stringify(this.json, null, 4));
       //console.log(this.json);
      } );
    //this.http.post('http://localhost:80/jsonrpc', data).subscribe( (res) => { this.json1 = res.text()});
    /////    this.http.post('http://localhost:80/jsonrpc', data).subscribe( res => this.json = res.json().result);
    //   this.http.post('http://localhost:80/jsonrpc', data).subscribe( (res) => { let test:any = res.text(); this.json1=test });
    //this.val = JSON.parse(this.json1);
   // console.log(this.val.result);
     // console.log(this.json1)
  //  this.json1 = this.json;
 // this.json = this.json1 + this.json1;
 //stringify(this.json1).
 //this.json = this.json1
 // alert( this.json)
 //alert();
 //alert(this.json);
 //console.log(typeof(this.json));
 //this.json = parseInt(this.json)+ 9;

 console.log(this.json1);
 //return this.json;


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

