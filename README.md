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
git clone https://github.com/affluent-bilby-classifieds/express-js_ra-cb-menu.git
```

change to the directory:

```
cd express-js_ra-cb-menu
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
```
Creating network "express-js_ra-cb-menu_default" with the default driver
Creating volume "express-js_ra-cb-menu_data" with default driver
Pulling postgres (postgres:9.6)...
9.6: Pulling from library/postgres
7d2977b12acb: Pull complete
0189767a99c6: Pull complete
2ac96eba8c9d: Pull complete
8b4f0db1ff6e: Pull complete
9e30cfe22768: Pull complete
8c90c3e75b96: Pull complete
5ddcc5e296f9: Pull complete
fd42372a1ee8: Pull complete
08af3aee77fc: Pull complete
48109f434ad3: Pull complete
9b84ccdb2d67: Pull complete
703a55f3bc8f: Pull complete
2a75caa3dc94: Pull complete
c5aaacc1e5c9: Pull complete
Digest: sha256:fd73224fa9c1ce2f1c62f06cde105fd7cc75fe6190883fc60d820244b5609d9b
Status: Downloaded newer image for postgres:9.6
Creating express-js_ra-cb-menu_postgres_1 ... done
Unable to find image 'waisbrot/wait:latest' locally
latest: Pulling from waisbrot/wait
8ad8b3f87b37: Pull complete 
28a5e8da707c: Pull complete 
d8dd4226e3a7: Pull complete 
Digest: sha256:6f2185daa4ab1711181c30d03f565508e8e978ebd0f263030e7de98deee5f330
Status: Downloaded newer image for waisbrot/wait:latest
Waiting for postgres:5432  .  up!
Everything is up
Pulling front (node:10)...
10: Pulling from library/node
81fc19181915: Pull complete
ee49ee6a23d1: Pull complete
828510924538: Pull complete
a8f58c4fcca0: Pull complete
33699d7df21e: Pull complete
923705ffa8f8: Pull complete
667ab65c1289: Pull complete
9c3f7667ed73: Pull complete
03e9677c0489: Pull complete
Digest: sha256:f9e66964ec6e9a78693929b58b3d95aadf03cc70e47f6d276d1e0943853c2bb5
Status: Downloaded newer image for node:10
Pulling nginx-front (nginx:stable)...
stable: Pulling from library/nginx
8559a31e96f4: Pull complete
9a38be3aab21: Pull complete
522e5edd83fa: Pull complete
2ccf5a90baa6: Pull complete
Digest: sha256:159aedcc6acb8147c524ec2d11f02112bc21f9e8eb33e328fb7c04b05fc44e1c
Status: Downloaded newer image for nginx:stable
Pulling pgweb (sosedoff/pgweb:)...
latest: Pulling from sosedoff/pgweb
9d48c3bd43c5: Pull complete
599efcc37b66: Pull complete
Digest: sha256:fcb0acce73e0382249e268c4616d83f9ff6e5dda467904905fd24317ec56712a
Status: Downloaded newer image for sosedoff/pgweb:latest
express-js_ra-cb-menu_postgres_1 is up-to-date
Creating express-js_ra-cb-menu_front_1 ... done
Creating express-js_ra-cb-menu_pgweb_1       ... done
Creating express-js_ra-cb-menu_back_1  ... done
Creating express-js_ra-cb-menu_nginx-front_1 ... done
```


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
