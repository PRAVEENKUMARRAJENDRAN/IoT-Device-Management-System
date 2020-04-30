import pymongo
import json
import sys
#import smtplib
import datetime
from pymemcache.client import base
from cache_system import result
from cache_system import bb
from cache_system import Data
from cache_system import a



if result!= None:
    r=int(result)
    if bb!="":
        b=int(bb)
        if r< b:
             Datas=Data;
             Datas['datetime'] = '{:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now())
             data=json.dumps(Datas)
             myclients = pymongo.MongoClient("mongodb://localhost:27017/")
             mydbs = myclients["iotdata"]
             mycols = mydbs["fault"]
             x = mycols.insert_one(Data)
             msg= a +'shows abnormal values'
           

    elif bb=="":
        Datas=Data;
        Datas['datetime'] = '{:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now())
        data=json.dumps(Datas)
        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["iotdata"]
        col = db["fault"]
        x = col.insert_one(Data)
        msg= a +'is dead'
       




    
      
        
       
        
        
            
                        
                
                 
                 
                 
                      
                      

                 
                    
                   
                      

                
                

    
        
        
            
            

     
   
        
    




















'''Get the data and split it key and value then pass it to cache function'''





    
