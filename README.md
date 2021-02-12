# XMeme :wave:	
**The application is live here - [XMeme](https://xmeme.coolayush.ninja)** 

**The documentation for backend apis can be accessed here - [Docs](https://xmeme.coolayush.ninja/swagger-ui)**

> XMeme is a Meme Stream Page where users can post memes by providing their name, a caption for the meme \
and the URL for the meme image as input. The page retrieves and displays the latest 100 posted Memes (names + \
meme images + caption).

## Installation
Install the dependencies and devDependencies and start the server.
### Backend
This will start two servers: one for hosting swagger-ui and another for your node.js application.
```sh
$ cd shahayush457-me_buildout_xmeme
$ chmod +x test_server.sh
$ sudo ./test_server.sh
```
### Frontend

```sh
$ cd shahayush457-me_buildout_xmeme/frontend
$ npm install
# Start Vue DevServer: http://localhost:8082/
$ npm run serve
```
Now you can access the site locally at http://localhost:8082/
#### Building for source
Frontend Build for production (Will build into backend/view, ready for deployment)
```sh
$ cd shahayush457-me_buildout_xmeme/frontend
$ npm run build
```
Now just deploy the backend folder.
### Docker :whale2:	
The XMeme is completely dockerised. \
By default, the Docker will expose port 8080 - for swagger-ui server, 8081 - for all api requests and 27017 - for mongodb. \
**Note** - You need [Docker](https://docs.docker.com/engine/install/) installed on your system.
```sh
$ cd shahayush457-me_buildout_xmeme
$ docker build -t xmeme .
```
This will create the xmeme image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map the same ports(or whatever port was exposed in the Dockerfile). \
Now just push the xmeme docker image to docker hub and pull it in your server to run the container.

```sh
$ docker run -d -p 8081:8081 -p 8080:8080 -p 27017:27017 --name xmeme xmeme
```
Now you can access you application at http://server-address:8081/

### Todos

 - Add auth
 - Add feature to like, comment and share
 - Add edit button in the frontend for update api in the backend
 - Write Tests for frontend

License
----

**[ISC](https://opensource.org/licenses/ISC)**

Author
---
**[Ayush Shah](https://github.com/shahayush457)**
