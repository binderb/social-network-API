# Social Network API

## Description

A back-end exercise that provides API endpoints for a hypothetical social network platform and stores associated data in a MongoDB database, using the Mongoose ODM. The project includes the following features in accordance with the challenge guidelines:
- Proper setup of the `.gitignore` file to prevent `node_modules` and other extraneous system files from being tracked.
- Use of the **Mongoose** package to establish a connection to a local MongoDB database and perform operations.
- Use of Mongoose **schemas** and **models** to structure the MongoDB database:
  - Schemas/models for "users" and "thoughts".
  - Schema for "reactions" associated with thoughts.
  - Use of **virtuals** to provide additional information in certain endpoints.
  - Use of **getter methods** to format stored dates on query.
- Use of Mongoose model methods to perform **CRUD operations** on users and thoughts.
- **Bonus objective:** invoking the `DELETE` route for users also deletes the target user's associated thoughts.

## Usage

### Package Installation

Use of the tool requires **Node.js** and relies on the **Express** and **Mongoose** packages as additional dependencies. After cloning the repo, run `npm i` in the project root directory to install all dependencies. 

### Database/Connection Setup

In order for the tool to run properly, you must have MongoDB installed and running locally.

### Using the API

After the prior setup steps are complete, run
```
npm run start
```
to start the Express server. The following API endpoints are be available on the server once it's running:
- Users:
  - (GET all, POST) - /api/users/
  - (GET one, PUT, DELETE) - /api/users/(:id)
    - NOTE: Deleting a user will delete all of the user's associated thoughts.
  - (POST or DELETE a user to/from friends list) - /api/users/(:userId)/friends/(:friendId)
- Thoughts:
  - (GET all, POST) - /api/thoughts/
  - (GET one, PUT, DELETE) - /api/thoughts/(:id)
  - (POST reaction to a thought) - /api/thoughts/(:thoughtId)/reactions
  - (DELETE reaction from a thought) - /api/thoughts/(:thoughtId)/reactions/(:reactionId)

### Walkthrough

(To be created)
<!-- 🎥 A video walkthrough of required database setup and API usage can be viewed [here](https://drive.google.com/file/d/1XAa76kPWP3HMJqi-kfSOrJxQb0zjESXb/view). -->

## Credits

General acceptance criteria for the project were prescribed by the UofM Coding Bootcamp (Trilogy Education Services); all code was written by the developer.

## License

Please refer to the LICENSE in the repo.