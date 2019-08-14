MEVN-STARTER

# EVN SETTING  
  
## [Mongodb](https://hub.docker.com/_/mongo)  
docker pull mongo  
docker run --name mevn-starter-mongo -p 27017:27017 -d mongo  

## Run Client  
cd client  
npm i  
npm start  

## Run Server  
cd server  
npm i  
npm start  
