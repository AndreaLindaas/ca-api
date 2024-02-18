# Wine Night API

### Description

This API is for an app for hosting and participating in wine tasting nights. The API is really simple, allowing users to create a wine night, create wine tastings and add wines to the database.

### Technical

The backend is PocketBase.
API is created with Express API Starter.
There is no authentication.
Production API running at render.com.

### API

The API is documented and usable with Postman. Repo is containing the postman collection file in JSON format. This file can be imported into postman to do API calls to production API.

### API endpoint description

#### Wine night

_[POST]_ add wine night: used to create a wine night. This should be done by the host. Add participant emails as a comma separated list, location and date to body data.  
_[GET]_ All wine nights: fetched all wine nights  
_[GET]_ MY wine nights: fetches all wine nights based on query parameter ?participant=
_[GET]_ Wine night: fetch specific wine night based on query paramter ?id=  
_[DELETE]_ Delete: deletes wine night with ID given in body.

#### Wine tasting

Wine tastings have IDs connecting them to a wine night and a wine. It also includes information about who did the tasting, rating and notes.

_[POST]_ wine tasting: adds a new wine tasting  
_[GET]_ wine tastings: fetches all wine tastings  
_[GET]_ wine tasting for specific wine night: gets all wine tastings for a single wine night by query parameter ?wine_night_id=

#### Wine

Endpoints to add, delete and list wines in database.

_[POST]_ add wine: adds wine to database.  
_[GET]_ all wines: Gets all wines from database  
_[DEL]_ delete wine: deletes wine from database based on given id in body.
