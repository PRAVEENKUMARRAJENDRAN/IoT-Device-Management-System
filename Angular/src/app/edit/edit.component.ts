import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {

  res: any[];
  json;
  json1;


  editForm1 = new FormGroup({
    sid: new FormControl (''),
    name: new FormControl (''),
    value: new FormControl (''),
    unit: new FormControl ('')

  });


  constructor(private http : Http) {

  }

  public myedit(){
    console.log(this.editForm1.value );

    const data = {
      "jsonrpc" : "2.0",
      "method" : "foobar2",
      "id" : "12",
      "params": this.editForm1.value
  }

  this.http.post('http://localhost:80/jsonrpc',data).subscribe( res => console.log(this.json =res.text()))
  alert('updated');
  this.json = JSON.stringify(this.json)


      return  this.json
    };

}
