# RESTful-APIs
This project demonstrates the implementation of a simple RESTful API using Node.js and Express.js. The project supports basic CRUD (Create, Read, Update, Delete) operations and serves as a foundational example for building scalable backend applications.

---

## Features

1. **Create**:
   - Add new posts to the server.
2. **Read**:
   - Retrieve a list of posts.
   - Retrieve a specific post by ID.
3. **Update**:
   - Edit an existing post by ID.
4. **Delete**:
   - Remove a specific post by ID.

---

## Project Structure

```
RESTful-APIs/
├── node_modules/          # Project dependencies
├── public/                # Static files (CSS, JS, images, etc.)
├── views/                 # EJS templates for rendering views
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
├── index.js               # Main server file
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency tree lock file
└── README.md              # Project documentation
```

---

## Installation

Follow the steps below to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/SahilBrar1/RESTful-APIs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd RESTful-APIs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

### 1. **GET /posts**
   - Retrieves all posts.
   - Response: Array of post objects.

### 2. **POST /posts**
   - Creates a new post.
   - Request body: `{ "title": "Post Title", "content": "Post Content" }`

### 3. **GET /posts/:id**
   - Retrieves a single post by ID.

### 4. **PATCH /posts/:id**
   - Updates a post by ID.
   - Request body: `{ "content": "Updated Content" }`

### 5. **DELETE /posts/:id**
   - Deletes a post by ID.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **EJS**: Template engine for dynamic rendering of views.
- **HTML/CSS**: For creating the frontend interface.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Developed by [Sahil Brar](https://github.com/SahilBrar1).

# Screenshot
![image](https://github.com/user-attachments/assets/0a4617c6-6fbd-4173-ba1e-ee321eee0f94)

