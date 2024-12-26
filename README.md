# Pincode Search and Favourites Application

## Backend:-
### Technologies Used
* Node.js
* Express.js
* MySQL/MariaDB
* Fetch Api
### Setup Instructions :
1. Clone the repository:
   ```
   git clone https://github.com/Hawzz7/post_backend.git
   cd post_backend
2. Install dependencies:
   ```
   npm install
3. Configure the database:
   * Create a database named postal_db.
   * Run the following SQL script to create the favourites table:
   ```
   CREATE TABLE favourites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    branch_type VARCHAR(255),
    delivery_status VARCHAR(255),
    district VARCHAR(255),
    region VARCHAR(255),
    state VARCHAR(255)
   );
4.Update the database configuration: Modify db/connection.js with your database credentials:
  ```
    export const db = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'postal_db',
   });
```
5. Start the server:
   ```
    npm start
6. Server will run on: http://localhost:8000

## File Structure:
```
backend/
│
├── controllers/
│   └── favouritesController.js # Controller for managing favourites
├── routes/
│   ├── searchRoutes.js         # Routes for searching pincodes
│   └── favouritesRoutes.js     # Routes for managing favourites
├── db/
│   └── connection.js           # Database connection setup
├── server.js                   # Entry point for the backend
```
## API Endpoints:
### Search Routes

* **GET **/search
  * Query parameters: query (pincode or name), type (code or name)
  * Fetches pincode data from the Indian Postal API.

### Favourites Routes

* **POST **/favourites
  * Body: { name, branchType, deliveryStatus, district, region, state }
  * Saves a favourite location to the database.

* **GET **/favourites
  * Fetches all saved favourites from the database.
