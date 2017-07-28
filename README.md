# NY-Times-React-Search
- Author:  Darrell Freeman
- Date: 07/25/17
- Tools Used:  HTML5, CSS, Bootstrap, Javascript, Node.js, React.js, MongoDB, Express, Heroku, NY Times API,           
NPM's (axios, body-parser, express, mongoose, morgan, react, react-dom, react-router), Dev Dependencies (babel-core, babel-loader, babel-preset-es2015, babel-preset-react, webpack)
- Website URL:  https://mynytimessearch.herokuapp.com/

![Query Articles](/public/images/screenshot.png)

This is a React-based web scraper that uses the [New York Times Article Search API](http://developer.nytimes.com/) to query and display articles that interest the user.  The query returns clickable links that retrieve the article for immediate reading if desired, or the articles can be saved to the database for perusal later.    

## Functionality
The frontend uses `ReactJS` for rendering components, `axios` for internal/external API calls, and `bootstrap` as a styling framework.

On the backend, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.



In order to transpile the JSX code, `webpack` and `babel` were utilized. All of the JSX  code in the `/app` folder was transpiled into the `bundle.js` file located in the `/public` folder.


## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have MongoDB set up on your laptop
    * An amazing repo to get you started with that can be found [here](https://github.com/dannyvassallo/mongo_lesson).
  2. Once you are set up, `cd` into this repo and run `npm install`.
  3. Then open another bash or terminal window and run `mongod`
  4. Run the script with `node server.js`.
  5. Navigate to `localhost:3000` in your browser.

Note that if you made changes to the JSX code in the `/app` folder, you must transpile it to see your changes. When `cd`-ed into this repo, enter `npm run bundle` in the command line to trigger my `webpack` script.

The `/test` folder can be disregarded since its files were made just for laying out the design of the app.


## Screenshots
#### Users are able to submit a topic, start year, and end year to query the New York Times
![Query Articles](/screenshots/query-articles.png)

#### Press the green, save button and the article is bookmarked via an `/api/saved` post route
![Article Content](/screenshots/add-bookmark.png)

#### Press the red, remove button and the bookmarked article is removed via an `/api/delete/:id` post route
![Add Comment](/screenshots/remove-bookmark.png)

#### Note that the get routes include an **internal route** to `/api/saved` for querying and displaying all the bookmarked articles from the Mongo database.

#### Note that the get routes also include an **external route** to `https://api.nytimes.com/svc/search/v2/articlesearch.json` for querying the New York Times.
