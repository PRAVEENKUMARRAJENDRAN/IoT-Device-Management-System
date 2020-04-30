Download NIFI from [here by clicking](https://nifi.apache.org/download.html)

Select binary file eg: nifi-1.11.3-bin.zip [1.2 GB] ( asc, sha256, sha512 )

In terminal go to the location where NIFI has been downloaded and move into *nifi.1.10.1.bin *
Then move into *nifi.1.10.1* then move into bin folder
And execute 
> “run-nifi.bat” 
It takes few minutes to start in mean time start cache server


To start cache server
First you need to download and install memchache for python from [here](https://pypi.org/project/python-memcached/)
In terminal direct to location where Memcached have been installed and execute

> “memcached.exe -vv “  

In another new terminal execute 

> “telnet localhost 11211” 

Now go to **localhost:8080** to view NIFI
In an empty canvas drag and drop all the processors we need and connect them logically and configure each processor in such a way shown in screen shots

And start all the processors 


**//now NIFI is ready to consume data and check with database with the help of cache//**

To send data to NIFI
We use Arduino ide to send data from sensor to NIFI to the port 7001

In Arduino ide the username , password of WIFI and IP address should be modified to our credentials and execute it
*//now our sensor is transmitting its real time data to NIFI (data collector) *

**//Nosql-DataBases//**

Configure Nosql data base with various collection name for each part of program in order to store in DB & retrive from DB for Validation  

**//CORS//**
since we are using our custom port(80) we will getting issue with CORS to over come that issue ,
as of now we use CORS extension in web browser but still it's not recommended 


**//Final work Flow//**
Sensor data from Sensors are sent to NiFi ,then NiFi process the incoming data then it enters into script to
check and validate data and it is stored in a DB.From user perspective the AngularJS fetches the data from DB with DB service 
with the fetched data UI are decorated