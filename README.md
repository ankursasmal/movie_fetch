🎬 Movie Fetch App (Vite + React)
This is a React project built with Vite that fetches movie data from a dummy API and displays it. Users can search movies by type dynamically.

🚀 Features
Fetches movie data from Dummy API
Displays movie posters, names, ratings, and release years
Search functionality based on movie type or name
Loader animation while fetching data
🖥️ Demo Screenshot
(Optional: Add screenshot here if you want)

📂 Installation & Running Locally
Clone the Repository:
bash
Copy
Edit
git clone https://github.com/ankursasmal/movie_fetch.git
cd movie_fetch
Install Dependencies:
bash
Copy
Edit
npm install
Start the Development Server:
bash
Copy
Edit
npm run dev
The app will run at http://localhost:5173/ (or the port Vite shows).

🌐 API Used:
Dummy API endpoint:

arduino
Copy
Edit
https://dummyapi.online/api/movies
Example response:

json
Copy
Edit
[
  {
    "id": 1,
    "image": "https://dummyimage.com/600x400/000/fff",
    "movie": "The Shawshank Redemption",
    "rating": 9.3,
    "year": 1994
  },
  ...
]
🔎 Search Feature:
Type any movie name or keyword in the input box.
Movies matching the keyword will be displayed.
Search works dynamically as you type.
📄 Project Structure
arduino
Copy
Edit
public/
│   └── loader.gif       # Loader image
src/
│   └── App.jsx          # Main React component
│   └── main.jsx         # React/Vite entry point
vite.config.js
README.md
package.json
