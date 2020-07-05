# This project uses postgres as a database for a React-admin data provider.

Please note: Although I am a seasoned tech guy I am quite a novice as a developer. If my code is broken please see the [original project](https://github.com/francoisruty/fruty_react-admin) by Fruty. Here is his [Blog post](https://fruty.io/2020/01/15/building-business-apps-with-react-admin/).

Having said that you are welcome to lodge support Issues here and I will help you as much as I can.


I have now decided to backport the changes I have made from [react-admin-and-postgraphile-playground](https://github.com/affluent-bilby-classifieds/react-admin-and-postgraphile-playground) so the docker configuration will get updated to include the scripts and resources in that project accordingly.



This project uses [ra-data-simple-rest](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest) for the data privider. That wasn't obvious to me at first. You will find the source code in the readme is very similar to the code used here.


The back-end uses [Express](https://github.com/auth0/express), [Express-jwt](https://github.com/auth0/express-jwt) and [express-jwt-authz](https://github.com/auth0/express-jwt-authz).






### Procedure

The first step is to 'git clone' the repo.

In this case:

```
git clone https://github.com/affluent-bilby-classifieds/prisma_ra-cb-menu.git
```

change to the directory:

```
cd prisma_ra-cb-menu
```


You may need to add execute permission to the build scripts.

```
cd scripts
```


```
chmod +x *.sh
```

install jq

```
sudo apt-get install jq -y

```


In the next part we load the docker-compose.yml file to build our containers and to do this we run the up script and get this party started:

```
./up.sh
```
You should see it go something like this:

![Screenshot](sc4.png)


Install dependencies for front and back:

```
cd ..
```
```
docker-compose run front /bin/sh
```
```
cd /home/app
```

```
npm install
```
```
exit
```

```
docker-compose run back /bin/sh
```

```
cd /home/app
```
```
npm install
```
```
exit
```




Start-docker containers again:

```
docker-compose up -d
```
Create a new user:

```
curl -X POST http://localhost:3000/api/create_user -H 'Cache-Control: no-cache' -H 'Content-Type: application/json' -d '{ "email": "test@test.fr", "password": "Password1" }'
```

You should get:
{"result":"user created."}

This uses express.js (in the server.js file) to add a line to the users table. The password is hashed with bcrypt.
The users table as well as the other provided tables are built on demand using the seed.sql file. After this the fixtures.sql fills
the tables with example data.


All containers should now be up, and you can go to http://localhost:3000 in your browser.




### Verifications

- you should be able to log in with the user you created.

- you should be able to create, edit, and delete items.


### Notes

We have just signed up for the [Supabase.io](https://github.com/supabase/supabase) public alpha!

- we use a nginx load-balancer in front of the dev server, so that we can easily route
API calls to the back docker container, without messing with front dev server parameters.

- do NOT use this setup in production! This is a dev environment! For production you would have
to make Dockerfiles for front and back (front Dockerfile would use among other things "npm run build" command), build those docker containers and use them in docker-compose.yml, instead of mapping source code inside containers with docker filesystem mappings + installing manually dependencies.
