# Decomposição de número

### 1. Install app dependencies

| Depency        | Link                                                                                       |
|----------------|--------------------------------------------------------------------------------------------|
| Yarn           | [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install) |
| Docker         | [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)                 |
| Docker Compose | [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)       |

### 2. Install dependencies

- In the project root folder, run the command below:

~~~
yarn install
~~~

### 3. Docker up

- In the project root folder, run the command below:

~~~
docker-compose up
~~~

## Other commands

### Run Tests
~~~
yarn test
~~~

### Build Code
~~~
yarn build
~~~

### Clean Build
~~~
yarn clean
~~~

### Swagger Documentation
After the `Docker up`, you can access the swagger documentation, by the link below:
~~~
http://localhost:3333/api-docs/
~~~

### Using API
With the `Docker up`, just send a POST request to the endpoind below:
~~~
http://localhost:3333/decomposition/
~~~

With the JSON body like this(using the number of your choice):
~~~JSON
{
  "numberToBeDecompose": 45
}
~~~