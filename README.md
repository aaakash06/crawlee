# crawlee

# inits

```
npm init -y
npx tsc --init
```

change rootDir and outDir in tsconfig.json

# install yarn

```
npm install yarn
```

# fix docker build error

```
mv Dockerfile Dockerfile.bak
mv Dockerfile.bak Dockerfile
```

# remove docker image

```
docker rmi image_id
```

# remove docker container

```
docker rm/remove container_id
```

# rename docker image

```
docker image tag old_image_id new_image_id

docker image tag sharepali:node aaakash06/sharepali:node
```
