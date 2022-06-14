# Microservice with nestjs On AWS server and Docker
### Yararlı linkler: 
https://github.com/Nditah/nestjs-microservice<br/>
https://github.com/jmadankumar/nestjs-basic-auth<br/>
https://nestjs.com/<br>
https://stackoverflow.com/questions/52266348/how-to-split-nest-js-microservices-into-separate-projects<br>
### 1. AWS
```
 Create instance Canonical, Ubuntu, 20.04 LTS, amd64. Allow HTTP and HTTPS traffic from the internet.
 Download .ppk file and connect ssh via putty
```
### 2. Install Docker Engine
```
   $ sudo apt-get update
   $ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs)  stable"
   $ sudo apt-get install docker-ce
   $ sudo systemctl start docker
   $ sudo systemctl enable docker
   $ sudo systemctl status docker
   ```
### 3. Install Portainer
```
   $ docker volume create portainer_data
   $ docker run -d -p 8000:8000 -p 9443:9443 --name portainer \
   --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v portainer_data:/data \
   portainer/portainer-ce:2.9.3
   ```
### 4. open 9443 port on AWS server.
```
   Menu Network & Security > Security Groups
   restart EC2 instance
   visit https://{serverapi}:9443/
   create admin
   create docker
   ```
### 5. Create container "Containers > Add container" menu
```
   image: node:latest
   Advanced container settings: select "Interactive & TTY (-i -t)" radio
   Manual network port publishing: host: 80, container: 3000
```
container içinde nodejs hazır geliyor. Özel kurulum istenirse
#### Node js kurulumu
```
$ sudo apt update  && sudo apt upgrade
$ curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
$ sudo apt-get install nodejs
$ node -v
```
### 6. Connect Container via SSH
```
   open Containers > api-gateway page
   click Console link in Container status "Containers > api-gateway > Console"
   click "Connect" button for ssh console
```
### 7. Install Nestjs s on Container
```
   # npm i -g @nestjs/cli
   # npm install -g npm@8.12.1
   # npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
   # npm audit fix
   ayrıca microsevis klasörü içinde yüklenecek temel bileşenler
   # npm i --save @nestjs/core 
   # npm i --save @nestjs/common
   # npm i --save @nestjs/microservices
   # npm i --save @nestjs/config
   # npm i --save passport passport-local
   # npm i --save dotenv --save
   microservisi çalıştırmak için
   npm run start:dev
```
Bu aşamada containerinizi Portainer Images içine clonlayarak siğer webservisler için bu işlemleri tekrarlamaktan kurtulabilirsiniz. Ben nestjs:latest adında bir local image oluşturdum. bu image "Image list" sayfasında listeleniyor 
### 8. Install A Micro Servis on Container
```
   # cd home
   # git clone https://github.com/newcart/api-gateway.git
   # cd api-gateway
   # npm run start
```
İşlemler tamanlanınca sunucu ipsi ile siteyi ziyaret ettim.<br/>
http://107.20.99.209/<br/>
```
Hello World! The Newcart is runing...
```
