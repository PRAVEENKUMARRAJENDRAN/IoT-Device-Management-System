import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  hh = 17;
  json3;


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['FAULT avg of 10 days'];
  public barChartType = 'bar';
  public barChartLegend = true;


  public barChartData = [
    {data: [this.json3], label: 'fault-avg of 10 days'},
    //{data: [28], label: 'resolved'}
  ];




  res: any[];
  json = 10;
  json1;
  json2;
  val;
  tot;
  off;
  alive;
total = 100;

dead = 5;



  public doughnutChartLabels = [ 'Alive', 'Dead', 'OFF'];
  public doughnutChartData = [ this.json, this.dead, this.off];
  public doughnutChartType = 'doughnut';

  constructor(private http: Http) { }

  ngOnInit() {
    const data = {
      "jsonrpc" : "2.0",
      "method" : "count",
      "id" : "1",
      "params": {'argument' : 'something' }
  };
  const meta = {
    "jsonrpc" : "2.0",
    "method" : "count3",
    "id" : "4",
    "params": {'argument' : 'something' }
};

  const fault = {
    "jsonrpc" : "2.0",
    "method" : "count1",
    "id" : "2",
    "params": {'argument' : 'something' }
};
const dead= {
  "jsonrpc" : "2.0",
  "method" : "count2",
  "id" : "3",
  "params": {'argument' : 'something' }
};
const bar = {
  "jsonrpc" : "2.0",
  "method" : "fbar",
  "id" : "6",
  "params": {'argument' : 'something' }
};
  const that = this;
 // this.http.post('http://localhost:80/jsonrpc', data).subscribe( res => this.json = console.log(res.json().result + 9));

  this.http.post('http://localhost:80/jsonrpc', data).subscribe( res =>  {
    let json_a= parseInt(res.json().result);
                                                              // console.log(that.json);
                                                             // console.log(json_a);
    that.json = json_a;
    //this.json not to be shown only for arithmetic calc
                                                            //console.log(that.json);
    that.doughnutChartLabels =  [ 'alive', 'fault', 'dead','off'];
    that.doughnutChartData = [ this.json, this.dead, this.off];
    that.doughnutChartType = 'doughnut';
   } );



   this.http.post('http://localhost:80/jsonrpc', fault).subscribe( res =>  {
    let json_a1= parseInt(res.json().result);
    //console.log(that.json);
    //console.log(json_a1);
    that.json1 = json_a1;

    //console.log(that.json);
    that.doughnutChartLabels = [ 'alive', 'fault', 'dead','off'];
    that.doughnutChartData = [ this.json, this.json1, this.json2,this.tot];
    that.doughnutChartType = 'doughnut';
   } );

   this.http.post('http://localhost:80/jsonrpc', dead).subscribe( res =>  {
    let json_a1= parseInt(res.json().result);
    console.log(that.json);
    console.log(json_a1);
    that.json2 = json_a1;

    console.log(that.json);
    that.doughnutChartLabels = [ 'alive', 'fault', 'dead','off'];
    that.doughnutChartData = [ this.json, this.json1, this.json2,this.tot];
    that.doughnutChartType = 'doughnut';
   } );

   this.http.post('http://localhost:80/jsonrpc', meta).subscribe( res =>  {
    let json_a= parseInt(res.json().result);
    console.log(that.json);
    console.log(json_a);
    that.tot = json_a;
    this.alive=this.tot-(this.json1+this.json2)
    this.off=this.json-(this.alive+this.json1+this.json2)

    console.log(that.json);
    that.doughnutChartLabels = [ 'alive', 'fault', 'dead','off'];
    that.doughnutChartData = [ this.alive, this.json1, this.json2,this.off];
    that.doughnutChartType = 'doughnut';
   } );


   this.http.post('http://localhost:80/jsonrpc', bar).subscribe( res =>  {
    let json_b= parseInt(res.json().result);
    that.json3 = json_b;
    console.log(this.json3);

    that.barChartData = [
      {data: [this.json3], label: 'fault-avg of 10 days'},
      //{data: [28], label: 'resolved'}
    ];



    //console.log(this.json);
  });

  }


}

