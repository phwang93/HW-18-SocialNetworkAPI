# HW-18-SocialNetworkAPI

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

<p align = "center">
<img alt="preview" src="/imgs/Demo.gif">
</p>

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Deployed URL for the Application 

Demo Video for the application: [Video](https://youtu.be/jMBa5A6An2c).
## Table of Contents

- [HW-18-SocialNetworkAPI](#hw-18-socialnetworkapi)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Deployed URL for the Application](#deployed-url-for-the-application)
  - [Table of Contents](#table-of-contents)
  - [Resources](#resources)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

## Resources

* [Express.js](https://expressjs.com)
* [Moment.js](https://momentjs.com)
* [MongoDB](https://www.mongodb.com)
* [Mongoose ODM](https://mongoosejs.com)

## Installation

* Git Clone the Repo into your system

* To install dependencies, run the following in your terminal:
  
`npm i`

`npm i moment`
## Usage

* After installations are completed, run the app with: 
  
`npm start`

## Test

`npm test` = ```echo Error: no test specified" && exit 1```
## License

* Copyright 2022 Philip Hwang
* This repository is licensed under the [MIT license](./LICENSE).

## Questions

If you have any questions, please contact me at: 
* Email: [pshwang93@gmail.com](mailto:pshwang93@gmail.com). 
* GitHub: [phwang93](https://github.com/phwang93).
* Repo: [HW-18-SocialNetworkAPI](https://github.com/phwang93/Homework-18-SocialNetworkAPI).
* Video: [Social Network API Demo](https://youtu.be/jMBa5A6An2c).