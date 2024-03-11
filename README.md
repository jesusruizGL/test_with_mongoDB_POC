# test_with_mongoDB_POC

start docker container via dockerfile

```
docker-compose up
```

connect to docker container
https://linuxize.com/post/how-to-connect-to-docker-container/

```
docker container exec -it mongo mongosh
```

via mongosh, create collection for testing
```
run db.createCollection('inventory')
```

in mongosh, check collection with 
```
db.inventory.find()
```

to run the tests, open another terminal and run 
```
yarn test
```