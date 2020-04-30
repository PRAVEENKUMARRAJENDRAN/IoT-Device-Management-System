import { Component } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent  {
  res: any[];
  json;
  json1;


  delForm1 = new FormGroup({
   sid: new FormControl ('')

  });


  constructor(private http : Http) {

  }

  public mydelete(){
    console.log(this.delForm1.value );

    const data = {
      "jsonrpc" : "2.0",
      "method" : "foobar1",
      "id" : "11",
      "params": this.delForm1.value
  }

  this.http.post('http://localhost:80/jsonrpc',data).subscribe( res => console.log(this.json =res.text()))
  alert('deleted');
  this.json = JSON.stringify(this.json)

      return  this.json
    };


  }



