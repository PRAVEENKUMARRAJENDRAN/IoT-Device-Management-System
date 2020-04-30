import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
@Component({
  selector: 'app-testtree',
  templateUrl: './testtree.component.html',
  styleUrls: ['./testtree.component.css']
})
export class TesttreeComponent {
  json;

  constructor(private http: Http) { }

  ngOnInit()  {

    const data = {
      "jsonrpc" : "2.0",
      "method" : "fbar",
      "id" : "6",
      "params": {'argument' : 'something' }
  };
  this.http.post('http://localhost:80/jsonrpc', data).subscribe( res =>  {
    this.json= parseInt(res.json().result);
    console.log(this.json);
  });

  }
}
