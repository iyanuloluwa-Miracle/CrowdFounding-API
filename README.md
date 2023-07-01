# Crownfounding API with Sailsjs

This API that facilitates the creation of campaigns and the processing of donations. This API offers functionalities for campaign creation and donation processing, allowing users to easily create campaigns and accept donations and some amazing endpoints have been developed too.


a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Fri Jun 23 2023 20:12:57 GMT-0700 (Pacific Daylight Time) using Sails v1.5.4.

<!-- Internally, Sails used [`sails-generate@2.0.8`](https://github.com/balderdashy/sails-generate/tree/v2.0.8/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

## Base URL

The base URL for all API endpoints is: http://localhost:1337


## Endpoints

### User Registration


```
POST /register
```

Register a new user with the provided username, email, and password.

Request Body:


```json
{
  "email": "user123@example.com",
  "password": "password123"
}

```

#### Response

* `201 Created:` User registration successful. Returns the generated JWT.
* `400 Bad Request:` Invalid request body.
* `500 Internal Server Error:` Server encountered an error.

### User Login

```
POST /login
```

Login an existing user with the provided email and password.

Request Body:

```json
{
  
  "email": "user123@example.com",
  "password": "password123"
}
```

#### Response

* `200 OK:` User login successful.
* `401 Unauthorized:` Invalid email or password.
* `404 Not Found:` User with the provided email not found.
* `500 Internal Server Error:` Server encountered an error.


## Create Campaign

* URL: `/campaigns`
* Method: `POST`
* Description: Create a new campaign.
* Request Body:
    * `title` (string, required): Campaign title.
    * `description` (string, required): Campaign description.
    * `category` (string, required): Campaign category.
    * `goal` (number, required): Campaign fundraising goal.
* Success Response:
    * Code `200 Ok` 
 
### Sample Request :


```json

{
  "title": "Campaign Title",
  "description": "Campaign Description",
  "category": "Category",
  "goal": 10000
}


```
## Get Campaigns by ID

* URL: `/campaigns`
* Method: `GET`
* Description: Get a list of campaigns with pagination, search, and filtering options.
* Query Parameters:
      * `page` (number): Current page number (default: 1).
      * `limit` (number): Number of records per page (default: 10).
      * `search` (string): Search keyword to filter campaigns by title (optional).
      * `filter` (string): Filter campaigns by category (optional).
* Success Response:
* Code: `200 OK`
* Content: `{ "campaigns": [...], "currentPage": 1, "totalPages": 3 }`
* Error Message:
* Code: `500 Internal Server Error`
* Content: `{ "error": "Server error" }`
* Sample Request:

```
GET /campaigns?page=1&limit=10&search=laptop&filter=technology
```  

## Update User

```  
PUT /campaigns/:id
 ```

Update Campaign information by ID.

### Request Parameters:

* `id`(number): Campaign ID

#### Request Body

```json
{
  "title": "UpdatedCampaign Title",
  "description": "UpdatedCampaign Description",
  "category": "UpdatedCategory",
}

```

#### Response: 


* `200 OK:` User found. Returns the user data.
* `404 Not Found:` User with the provided ID not found.
* `500 Internal Server Error:` Server encountered an error.



## Delete User

```
DELETE /campaigns/:id
```

Delete a Campaign by ID.

### Request Parameters:

* `id`(number): Campaign ID

#### Response: 


* `200 OK:` User found. Returns the user data.
* `404 Not Found:` User with the provided ID not found.
* `500 Internal Server Error:` Server encountered an error.

## Conclusion

The Crowdsourcing API provides endpoints for user registration, login, retrieval, update, and deletion.