import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
   
  res: any[];
  json;
  json1;

 
  
  addForm1 = new FormGroup({
   sid: new FormControl (''),
   name: new FormControl (''),
   value: new FormControl (''),
   unit: new FormControl (''),
   Latitude: new FormControl(''),
   Longitude: new FormControl('')
    
  });

  addForm2 = new FormGroup({
    //sid: new FormControl (''),
   name: new FormControl (''),
   // value: new FormControl (''),
    //unit: new FormControl ('')

  });
  

 
  //userModel = new User('001' , 'water' ,'50' ,'kelvin');
 
  
  constructor(private http : Http) {
    
   }

  
   onSubmit(){
     console.log(this.addForm1.value);
     console.log(this.addForm2.value);
    
   }

 public myinsert(){
  // console.log()
   //var h : String = this.addForm1.value;

   //console.log(this.addForm1.value.split(":"));
  // console.log(h.split(':'));
   console.log(this.addForm1.value );
  // console.log(this.addForm2.value );
   //console.log(this.addForm2.value);
    //alert('error');
    const data = {
      "jsonrpc" : "2.0",
      "method" : "foobar",
      "id" : "10",
      "params": this.addForm1.value 
  }
  
  this.http.post('http://localhost:80/jsonrpc',data).subscribe( res => console.log(this.json =res.text()))
  alert('inserted');
  this.json = JSON.stringify(this.json) 

      return  this.json
    };

 }
