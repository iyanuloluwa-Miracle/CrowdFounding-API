/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'POST /login': 'AuthController.login',
  'POST /signup': 'AuthController.signup',

  'POST /campaigns': { controller: 'CampaignController', action: 'create' },
  'GET /campaigns': { controller: 'CampaignController', action: 'find' },
  'GET /campaigns/:id': { controller: 'CampaignController', action: 'findOne' },
  'PUT /campaigns/:id': { controller: 'CampaignController', action: 'update' },
  'DELETE /campaigns/:id': { controller: 'CampaignController', action: 'delete' },
  'GET /campaigns/search': { controller: 'CampaignController', action: 'search' },
  'GET /campaigns/filter': { controller: 'CampaignController', action: 'filter' },

  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
