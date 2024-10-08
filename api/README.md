# Final Project (API)

## Run
```shell

npm install

npm run start:dev

# retrieve all lists (tests the server is running)
curl -v http://localhost:3001/todolist

# use bruno with the requests found in the ./bruno directory
```


## Setup

* install [asdf](https://asdf-vm.com/guide/introduction.html) - manages tool
  (i.e., `nodejs`) versions

* learn typescript (typing)
* learn eslint (lint)
* learn prettier (formatting)

* use [bruno](https://www.usebruno.com)
    * simple / git friendly (bru syntax)

```shell

# install nest
npm i -g @nestjs/cli

# create the api project (first time only)
nest new api

cd api

npm run test

# launch API on port 3001 (watching files)
npm run start:dev

# ensure api is up and running
curl -v http://localhost:3001

######################################
# sqlite
######################################
#
# @nestjs/typeorm provides model/repository injection, testability, and asynchronous configuration.
#
# typeorm is the most mature ORM available for TypeScript (it's written in `ts`)
#
# install typeorm and the sqlite driver
npm install @nestjs/typeorm typeorm sqlite3
```