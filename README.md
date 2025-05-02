Novel-Review is a backend server that allows young critics to review novels and its authors. Using Express and MongoDB, the API allows for CRUD operations for the Novel, Critic, and Author collections. ***This idea for this project was prompted and provided by Chat GPT and the sample data was generated from Chat GPT as well.

**Usage:**
*Be sure to create your own .env file and set PORT = 3000. For the MONGO_URI set that to the connection string associated to the MongoDB Compass on you local machine.
Clone the repo and make sure all dependencies are installed. To start the server CD to the root of the project and execute either npm run dev or run start. "Connected to MongoDB!" should appear in the terminal. To seed the DB, enter the following into the URL of a browser: http://localhost:3000/seed (if you did not set PORT = 3000, paste whatever PORT number you decided on). If done correctly the webpage should state: "Data Seeded To DB!" You can now check MongoDB Compass for the 'Novel' DB and the collections should be populated with documents. 

**CRUD Operations As Follows:**

**Test routes on programs such as Insomnia, Postman, and etc.

**Authors:** Create and Delete novel.

**Critic:** Read All Critic details and Update Critic details.

**Novels:** Read Novel by genre or by id.


| **Collection** | **Operations**           | **Method** | **URL**                                                | **Sample Data**                                         | **Description**                                   |
|----------------|--------------------------|------------|--------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------|
| **Authors**    | Create                   | POST       | `/api/authors`                                          | `{ "name": "Rick Riordan", "bio": "English writer", "novel": ["Percy Jackson: The Lightning Thief"], "birthDate": "1964-06-05" }` | Adds a new author to DB.               |
|                | Delete                   | DELETE     | `/api/authors/:id`                                      |                                  | Deletes an author by their ID.            |
| **Novel**    | Read (by genre)          | GET        | `/api/novel/search?genre=Classic`                   |                            | Retrieves novel filtered by a specific genre.  |
|                | Read (by ID)             | GET        | `/api/novel/:id`                                      |                                | Retrieves a specific story by its ID.     |
| **Critic**       | Read (all details)       | GET        | `/api/critic`                                            |                | Retrieves details of all critics in the database.   |
|                | Update (by ID)           | PATCH      | `/api/critic/:id`                                         | `{ "name": "Bel Christy", "age": 14, "favoriteGenres": "Classic" }` | Updates details for a young critic by their ID.     |


**Reflection**
After completing this project. I really know where my weakness are now in terms of the backend. My inital plan was to create a South Park API, but I set that up to be a bit too complex for me. I learned that when your creating your schema and testing what is being returned, its best to do it incrementaly rather than all at once. My main takeaway is that I must do more backend setup and increase the complexity of it little by little. Can't wait to go back to the frontend.