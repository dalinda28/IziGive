# IziGive

**Folder structure:**

*src/* All the files are inside this base component.

*assets/* Just as the name implies, this houses static files (e.g images) used in the application.

*assets/fonts* To put the fonts used in the project

*assets/img* All the images used in the application

*firebase/* Folder to configure Firebase

*components/* Shared components used across features are placed in this directory. An example of such is the layout component, which is used to wrap the application components and determine its overall layout.

*navigation/* Project base navigation goes here. We can create stack navigator and export it to our application.

*styles/* If we have global styles defined in our project we can put it over here like colors, font styles like things.

**Collections**

- users
- order
- trader

**Pages description**

*components/home*

- SearchBar.js: page to search an trarder by input with an address
- Main.js: Home page

*components/authentification*

- Login.js: page to loggin
- Register.js: page to register
