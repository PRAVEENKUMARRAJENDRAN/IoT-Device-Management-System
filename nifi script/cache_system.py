import pymongo
import json
import sys
import smtplib
import datetime
from pymemcache.client import base







Data= json.load(sys.stdin)
json_str=json.dumps(Data) #Changes to json format
d=json.loads(json_str) #Separate as a single key and attributes
a=d['sid'] # gets the value of Sensor_id
bb=d['value']
client = base.Client(('localhost', 11211)) #opens the localhost and makes the cache system to run
result = client.get(a) #checks whether the required key and value is present or not

    



if result is None:    #if the result is none,it is redirected to get the data from the databases
     myclient = pymongo.MongoClient("mongodb://localhost:27017/")
     mydb = myclient["iotdata"]
     mycol = mydb["real"]
     json_str=json.dumps(Data) #Changes to json format
     d=json.loads(json_str) #Separate as a single key and attributes
     a=d['sid']# gets the value of Sensor_id
     bb=d['value']
     myquery = { "sid": {"$eq": a} }  # Select the Sensor_id of the required Record to be checked
     x=mycol.find_one(myquery,{'_id':0});
     y =json.dumps(x)
     dd=json.loads(y)
     Sensorvalue=dd['value']  #Get the Sensor_id from the realvalue collections 
     Sensor_id=dd['sid']
     client = base.Client(('localhost', 11211))
     client.set(Sensor_id, Sensorvalue)
     Sensor_value=int(Sensorvalue) #convert the value from database to integer
     if Sensor_id==a and bb!="":
          c=int(bb)
          if Sensor_id==a and Sensor_value<c:
               Datas=Data;
               Datas['datetime'] = '{:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now())
               data=json.dumps(Datas)
               myclients = pymongo.MongoClient("mongodb://localhost:27017/")
               mydbs = myclients["iotdata"]
               mycols = mydbs["fault"]
               x = mycols.insert_one(Data)
               msg= a +'shows abnormal values'


              
     elif Sensor_id==a and bb=="":
          Datas=Data;
          Datas['datetime'] = '{:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now())
          data=json.dumps(Datas)
          myclient = pymongo.MongoClient("mongodb://localhost:27017/")
          db = myclient["iotdata"]
          col = db["dead"]
          x = col.insert_one(Data)
          msg= a +'is dead'
         

        
                      
                    
                 
                    

      
