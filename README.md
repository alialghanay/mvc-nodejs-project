# MVC Node.js Project

This project is a simple web application for managing and displaying student information (name, address, age). The application is built using the Model-View-Controller (MVC) pattern and utilizes various web application frameworks (WAFs).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [MVC Pattern Explanation](#mvc-pattern-explanation)
- [Routes](#routes)
- [License](#license)

## Technologies Used

- Node.js
- Express
- Pug
- Sequelize
- SQLite
- Axios
- Nodemon

## Project Structure

```
root
├── controllers
│   ├── dashboard.js
│   ├── delete-all-student.js
│   ├── student.js
├── models
│   └── Student.js
├── public
│   └── js
│       └── dashboard.js
├── routes
│   ├── dashboard.js
│   ├── delete-all-student.js
│   └── add-student.js
├── views
│   ├── dashboard.pug
│   ├── add-student.pug
│   └── layout.pug
├── db.js
├── mvc_demo.sqlite
├── server.js
└── package.json

```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn (package manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/alialghanay/mvc-nodejs-project.git
cd mvc-nodejs-project
```
### Install the dependencies:
```bash
yarn install
```
### Running the Project:
1. Start the server:
```bash
yarn start
```
2. Open your browser and navigate to:
```URL
http://localhost:8080
```

## MVC Pattern Explanation

### Model
The model manages the data and business logic. In this project, Student.js defines the schema for the student data and interacts with the SQLite database using Sequelize.

### View
The views handle the presentation logic. The project uses Pug templates to render HTML. The views are located in the views directory.

### Controller
The controllers manage the application logic and user input. They handle the flow of data between the model and the view. The controllers are located in the controllers directory.

### Routes

Dashboard: Displays a list of students.
``GET /dashboard``
Add Student: Provides a form to add a new student.
``GET /add-student``
``POST /add-student``
Delete All Students: Deletes all student records.
``POST /delete-all``
