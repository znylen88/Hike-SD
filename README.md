# Hike-SD
Hike-SD is a hiking app specific to the San Diego area which allows users to search hikes based on trail length.

## App Homepage:

![App Function](https://github.com/znylen88/Hike-SD/blob/master/public/GitHub-Images/Hike-SD-Homepage.png)

## Application Requirements

* Must use a Node and Express server

* Must be backed by a MySQL database and an ORM (not necessarily Sequelize)

* Must utilize both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with data)

* Must utilize at least one new third-party API

* Must have a polished UI

* Must use a CSS framework _other than_ Bootstrap

* Must follow MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must use Handlebars.js

## Description
Hike-SD is a hiking app that allows users to search hikes within the San Diego area based on trail length. The app uses passport and requires user singup/login in order to access the main Hike-SD homepage. This user data is stored in a MySQL database and includes the user's name, valid email address, and unique password. Once a user is logged in, they can search hikes based on 4 distinct trail length categories. We get the hiking information from the third party API, Hiking Project (REI), and render it to the page when a certain trail length is selected. A summary and image of the trail will render (when available) as well as trail star rating and precise trail length. Each hike will also render a "I hiked this!" button and a hike counter. These two components are our second use of data storage via a MySQL database. Once a "I hiked this!" button is clicked, the counter is updated to reflect this change and the new count is stored in the database.

## Usage
1. Navigate to https://hike-sd.herokuapp.com/.

2. Fill out the singup form or login if you already have an account.

3. Once logged in, you can select from four distinct trail length categories. Select which length you are interested in and a list of hikes will be displayed matching that criteria.

4. Browse through the data and feel free to click the "I hiked this!" button if you have hiked any of the listed trails.

5. This click will update the hike counter accordingly and render to the page upon refresh. 

6. HAPPY HIKING!

## Credits

Nicholas Serra (GitHub: nserra310) - HTML/CSS/Google Materialize/API-Routes/Javascript/MySQL

Holly Blome (GitHub: HBlome) - HTML/PowerPoint

Rod Nicolau (GitHub: RodNick10) - MySQL/Models

Zach Nylen (GitHub: znylen88) - API's/Javascript/JQuery/HTML/CSS/MYSQL/Heroku/API-HTML Routes/Passport

## 3rd Party APIs

1. OpenWeatherAPI

2. HikingProjectAPI (REI)

## Deployed App

https://hike-sd.herokuapp.com/

## App Signup:

 ![App Function](https://github.com/znylen88/Hike-SD/blob/master/public/GitHub-Images/Signup-Page.png, https://github.com/znylen88/Hike-SD/blob/master/public/GitHub-Images/Rendered-Hikes.png)
 
## Below is a rendered list of hikes within the "10+ Miles" category:

 ![App Function](https://github.com/znylen88/Hike-SD/blob/master/public/GitHub-Images/Rendered-Hikes.png)
 

