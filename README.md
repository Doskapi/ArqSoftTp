# ArqSoftTp


## ENTORNOS


### Python

#### Python flask
docker-compose -f docker-compose-flask.yml up

#### Python flask + gunicorn
docker-compose -f docker-compose-flask-gunicorn.yml up

#### Python flask + gunicorn + nginx
docker-compose -f docker-compose-flask-gunicorn-nginx.yml up



### Node

#### node + flask
docker-compose build
docker-compose run --rm -p 3000:3000 nodejs

#### node + nginx + flask
docker-compose build
docker-compose up

