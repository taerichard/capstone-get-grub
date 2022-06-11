# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

Introduction

- This application allows users to enter restaurant and city information to search for their restaurant.

Product Backlog

1. Create front end design for mobile device.
   a. Create user input elements for restaurant type and city name.
   b. Display API response as a list of images.
   c. Display detail view in a uniform manner.
   d. Display detail view of the chosen restaurant
2. Connect Yelp’s API request from user input.
   a. Connect two user inputs and attach to the API request.
   b. Display the response in main and detail page.

Product Screenshots

1. Search page where user input restaurant and city name.
2. User enters information.
3. Display data after search.
4. Once user clicks the restaurant, display detail view.

User Scenarios

1. User Todd lives in the city is on a budget for his meals. Every day after work around
   evenings, Todd looks for restaurants that fits in budget. He was recommended to use
   “GET GRUB’ to search restaurants that fits his budget.

2. User Mary landed in Los Angeles for pleasure. She wants to look for restaurants nearby
   her hotel but she is a picky eater because she only eats Mexican food. She found out
   that the GET GRUB application can search different food genres for dinning.

Github Wiki
Get Grub uses React Native version 0.48 with Expo CLI and Expo Go application for mobile
devices. On the command line type “npm start” which will initialize Expo CLI, displaying a QR
code. On your mobile device after installing Expo Go application, position camera to the code
and press link to start application.
The application will prompt a user input screen with two tex inputs. Enter restaurant name/type
followed by the city name. It will then display the data where users can choose. The final screen
will display a detailed view with restaurant information
