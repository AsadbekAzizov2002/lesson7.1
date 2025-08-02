import React, { useState } from "react";

function MovieForm() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !genre || !rating) return;

    if (editId) {
      const updatedMovies = movies.map((movie) =>
        movie.id === editId ? { ...movie, name, genre, rating } : movie
      );
      setMovies(updatedMovies);
      setEditId(null);
    } else {
      const newMovie = {
        id: Date.now(),
        name,
        genre,
        rating,
      };
      setMovies([...movies, newMovie]);
    }

    // Inputlarni tozalash
    setName("");
    setGenre("");
    setRating("");
  };

  const handleDelete = (id) => {
    const filtered = movies.filter((movie) => movie.id !== id);
    setMovies(filtered);
  };

  const handleUpdate = (movie) => {
    setName(movie.name);
    setGenre(movie.genre);
    setRating(movie.rating);
    setEditId(movie.id);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 shadow rounded">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:flex-row md:items-center"
      >
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 space-y-4">
        <h2>Movie</h2>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white p-4 rounded shadow flex justify-between items-start flex-col md:flex-row md:items-center"
          >
            <div className="text-lg font-medium space-y-1">
              <h2>
                <strong>{movie.name}</strong>
              </h2>
              <h2> Genre: {movie.genre}</h2>
              <h2> Rating: {movie.rating}</h2>
            </div>
            <div className="mt-2 md:mt-0 flex gap-2">
              <button
                onClick={() => handleDelete(movie.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(movie)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieForm;
