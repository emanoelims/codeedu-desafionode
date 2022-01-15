FROM mysql:8

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=root

ADD ./people.sql /docker-entrypoint-initdb.d

EXPOSE 3306
