```shell
cd docker
sudo docker-compose up -d
sudo docker-compose up down
sudo docker-compose ps
sudo docker-compose logs -f

sudo docker exec -it food-php bash
sudo docker exec -it food-web sh

sudo docker-compose stop food-web
sudo docker-compose start food-web

mysql -h127.0.0.1 -uroot -P3316 -p
root
show databases;
use wm
show tables;

http://82.157.54.206:8001/
http://82.157.54.206:8001/index.php

http://82.157.54.206:8001/cms/

docker run -it --name phpfpm -v /path/to/app:/app bitnami/php-fpm

curl -sSL https://raw.githubusercontent.com/bitnami/containers/main/bitnami/php-fpm/docker-compose.yml > docker-compose.yml
docker-compose up -d
```