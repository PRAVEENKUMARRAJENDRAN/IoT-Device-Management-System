from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple

from jsonrpc import JSONRPCResponseManager, dispatcher
import pymongo
from pymongo import MongoClient
import json
from datetime import datetime, timedelta



#################################################
#for update/insert

@dispatcher.add_method
def foobar(**kwargs):
    docl = []
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['real']
    a =kwargs["sid"]
    b =kwargs["name"]
    c =kwargs["value"]
    d =kwargs["unit"]
    e =kwargs["Latitude"]
    f =kwargs["Longitude"]
    #b = "some value"
    print (a+b+c+d+e+f)
#    {'name':a , sid :b}
    docs= collection.insert_one({'sid':a , 'name' :b , 'value' :c , 'unit' : d , 'Latitude' : e , 'Longitude' : f})
    
#    return a+b
#################################################

#for delete

@dispatcher.add_method
def foobar1(**kwargs):
    docl = []
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['fault']
    a =kwargs["sid"]
    
    #b = "some value"
    print (a)
#    {'name':a , sid :b}
    docs= collection.delete_one({'sid':a})

#################################################

#for update

@dispatcher.add_method
def foobar2(**kwargs):
    docl = []
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['fault']
    a =kwargs["sid"]
    b =kwargs["name"]
    c =kwargs["value"]
    d =kwargs["unit"]
    
    #b = "some value"
    print (a+b+c+d)
#    {'name':a , sid :b}
#myquery = { "sid": "Valley 345" }
#newvalues = { "$set": { "address": "Canyon 123" } }
#db.Employee.update(
#{'sid' :a},
#{$set: { 'name' :b , 'value' :c , 'unit' : d}});
#mycol.update_one(myquery, newvalues)

    docs= collection.update(
{'sid' :a},
{'$set': { 'name' :b , 'value' :c , 'unit' : d}})  






#################################################

#for meta 

@dispatcher.add_method
def getall(**kwargs):
    docl = []
    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['meta']
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    docs = collection.find()
    for doc in docs:
#        print(doc.get('NAV'))
        res = []
        res.append(str(doc.get('name')))
        res.append(str(doc.get('sid')))
        res.append(str(doc.get('value')))
        res.append(str(doc.get ('unit')))
        docl.append(res)
    print("replying to request")
    
    return docl

#################################################

# for fault
@dispatcher.add_method
def faultall(**kwargs):
    docl = []
    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['fault']
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    docs = collection.find()
    
    for doc in docs:
#        print(doc.get('NAV'))
        res = []
        res.append(str(doc.get('name')))
        res.append(str(doc.get('sid')))
        res.append(str(doc.get('value')))
        res.append(str(doc.get ('unit')))
        res.append(str(doc.get ('ip')))
        res.append(str(doc.get ('datetime')))
        
        docl.append(res)
    print("replying to request")
    
    return docl

#################################################




#for count 
@dispatcher.add_method
def count(**kwargs):

    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['real']
   
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    
    docs = collection.distinct('sid')
  
    
    c=len(docs)
    b=int(c)
    
    
    
    
    
    
  
    print("replying to request")
    return b

#################################################

#for count1 
@dispatcher.add_method
def count1(**kwargs):

    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['fault']
    
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    
    docs = collection.distinct('sid')
  
    
    c=len(docs)
    b=int(c)
    
    
    
    
  
    print("replying to request")
    return b
#################################################

#for count2 
@dispatcher.add_method
def count2(**kwargs):

    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['dead']
    c=db['fault']
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    
    docs = collection.distinct('sid')
  
    
    c=len(docs)
    b=int(c)
    
    
    
    
    
  
    print("replying to request")
    return b
#################################################

#for count3 
@dispatcher.add_method
def count3(**kwargs):

    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['meta']
    
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    
    docs = collection.distinct('sid')
  
    
    c=len(docs)
    b=int(c)
    
    
    
    
    
  
    print("replying to request")
    return b
#################################################


#for fbar 
@dispatcher.add_method
def fbar(**kwargs):

    print("got req");
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = client["test"]
    mycol = mydb["timestamp"]
   
    end = datetime.now()
    start = end - timedelta(days=10)
    start = end - timedelta(days=10)
    count = mycol.find({'date': {'$gte': start, '$lt': end}}).count()

    return count



#  This is the count:                                                                                               

    
  
#################################################


#for LOC 
@dispatcher.add_method
def loc(**kwargs):
    docl = []
    print("got req");
    db = MongoClient('mongodb://localhost:27017/').iotdata
    if not db:
        return "not able to connect to DB"
    collection=db['real']
    checkData = {
       "name" : "water"
    }
#    docs = collection.find(checkData)
    docs = collection.find()
    for doc in docs:
#        print(doc.get('NAV'))
        res = []
        res.append(str(doc.get('Latitude')))
        res.append(str(doc.get('Longitude')))
        res.append(str(doc.get('sid')))
        
        docl.append(res)
    print("replying to request")
    
    return docl
#################################################
    

   
    



@Request.application
def application(request):
    # Dispatcher is dictionary {<method_name>: callable}
    dispatcher["echo"] = lambda s: s
    dispatcher["add"] = lambda a, b: a + b

    response = JSONRPCResponseManager.handle(
        request.data, dispatcher)
    a = request.data
#    print(str(request.data))
    print("got to dispatch")
    print(a)
    
    
    print(response.json)
    a =response.json
    return Response(a, mimetype='application/json')
  

if __name__ == '__main__':
    run_simple('localhost',80, application)
