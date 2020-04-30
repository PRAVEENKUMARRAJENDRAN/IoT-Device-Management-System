#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>


const int waterSens = A0;

int svalue;





 
void setup() {
 
  Serial.begin(115200);                                  //Serial connection
  WiFi.begin("your-wifi name", "your wifi password");   //WiFi connection
 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
 
    delay(500);
    Serial.println("Waiting for connection");
 
  }
 
}
 
void loop() {
 
 if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
   svalue = analogRead(waterSens);
   if (svalue > 100){
   String sensorid ="001";
  
   
  DynamicJsonBuffer jBuffer;
  
  //char json[] = "{\"sid\":\"001\",\"value\":\"110\}";
  JsonObject& root =jBuffer.createObject();
  
  String data;
  String value;

  value = String(svalue);
  
 
  root["sid"]=sensorid;

  root["value"] =value;
  root.printTo(data);
  Serial.println(data);
  
  
 
   HTTPClient http;    //Declare object of class HTTPClient
 
   http.begin("http://192.168.1.5:7001/contentListener");      //Specify request destination
   http.addHeader("Content-Type", "application/json");  //Specify content-type header

    
  
  
   
 
   int httpCode = http.POST(data);   //Send the request
   //String payload = http.getString();                  //Get the response payload
 
   //Serial.println(httpCode);   //Print HTTP return code
  // Serial.println(payload);    //Print request response payload
 
   http.end();  //Close connection
   }
 }
 
 else{
 
    Serial.println("Error in WiFi connection");   
 
 }
 
  delay(1000);  //Send a request every 30 seconds
 
}
