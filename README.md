# NY-Times-React-Search

![NY Times Article Search](/public/images/screenshot.png)
- Author:  Darrell Freeman
- Date: 07/25/17
- Tools Used:  HTML5, CSS, Bootstrap, Javascript, Node.js, React.js, MongoDB, Express, Heroku, NY Times API,           
NPM's (axios, body-parser, express, mongoose, morgan, react, react-dom, react-router), Dev Dependencies (babel-core, babel-loader, babel-preset-es2015, babel-preset-react, webpack)
- Deploy URL:  https://mynytimessearch.herokuapp.com/

This is a React-based web scraper that uses the [New York Times Article Search API](http://developer.nytimes.com/) to query and display articles that interest the user.  The query returns clickable links that retrieve the article for immediate reading if desired, or the articles can be saved to the database for perusal later.    

## Functionality
The frontend uses `React.js` to render the components making up the page, `axios` for internal/external API calls, and `bootstrap` as a styling framework.  The backend uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.  In order to transpile the JSX code, `webpack` and `babel` were utilized.  All of the JSX  code in the `/app` folder was transpiled into the `bundle.js` file located in the `/public` folder.
