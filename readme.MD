# Installation
## Backend
MacOS instructions only, but this isn't hard to replicate on another OS.

### Pip Packages
Always be safe and use a virtual environment, kids.
```
python -m venv venv
source venv/bin/activate
pip install django psycopg2 djangorestframework djangoextensions
```

### PostgreSQL Setup
Install PSQL with `brew install postgresql`. Then, create a database cluster with `initdb /usr/local/var/postgres
`. 

Once that's done, you need to start the database cluster. *If you reboot, you will need to start up the cluster again*. The backend won't work otherwise. Do so with `pg_ctl -D /usr/local/var/postgres start`.

Here, you'll either need to grab a copy of the database or we'll need to have a server somewhere.

Add the database to your Django project settings.

### Database Setup
Next, make the database with `createdb comethru`. If you can wrangle a copy of someone else's, you can load it with PSQL. Otherwise, we'll build it from scratch.

Create a user for yourself with `python manage.py createsuperuser`.

Finally, fire up the server with `python manage.py runserver localhost:8000`. 

Visit localhost:8000/admin and enter your super user credentials. If it works,
the database is set up!

The last thing you need to do is create an admin user on the database so we can programatically access it from the frontend. Go to the PSQL command prompt and do this:
```
CREATE USER comethru_admin WITH PASSWORD 'fourscoreandseven';
ALTER ROLE comethru_admin SET client_encoding TO 'utf8';
ALTER ROLE comethru_admin SET default_transaction_isolation TO 'read committed'; (edited) 
ALTER ROLE comethru_admin SET timezone TO 'UTC';
ALTER ROLE comethru_admin WITH superuser;
CREATE DATABASE comethru;
GRANT ALL PRIVILEGES ON DATABASE comethru to comethru_admin;
```

## Frontend
```
cd react-native && npm install
cd ios && pod install
```

# Running
`npm run ios` will run the backand and bundler in a new terminal, and fire up the simulator.

`npm run backend` will run just the backend.

`react-native run-ios` will run just the frontend.

You can also run through XCode by selecting `comethru.xcworkspace` and using the play/stop buttons.

# Directory Structure
Dead simple. The backend lives in the `django` folder. That one's set up like a normal Django project.

The frontend lives in the `react-native` folder. Again, just a standard RN project. All of our code starts in `src` so it's not cluttered together with the clusterfuck of configuration files needed to run RN. 
