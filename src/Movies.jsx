// import React, { useState } from "react";

// function Movies() {
//   const [name, setName] = useState("");
//   const [genre, setGenre] = useState("");
//   const [rating, setRating] = useState("");
//   const [movie, setMovie] = useState([]);
//   cont[(editId, setEditId)] = useState(null);

//   const handleSubmit = (e) => {
//     e.perventDefault();
//     if (!name || !genre || !rating) return;
//     if (editId){
//         const updateMovies= Movies.map((movie)=>{
//             movie.id=== editId?{...movie, name, genre,rate}:movie
//         }
//     )
//     setMovie(updateMovies)
//     setEditId(null)
//     }else{
//         const newMovie ={
//             id:Date.now(),
//             name,
//             genre,
//             rating,
    
//         }
//         setMovies([...movie, NewMovie])
//     }
    
// };
//   return (
//     <div>
//       <form
//         action="
//         "
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           placeholder="Movie Name"
//           value={name}
//           onChange={(e) => e.target.value}
//         />{" "}
//         <input
//           type="text"
//           placeholder="Genri"
//           value={ganre}
//           onChange={(e) => e.target.value}
//         />{" "}
//         <input
//           type="text"
//           placeholder="Rateng"
//           value={rating}
//           onChange={(e) => e.target.value}
//         />{" "}
//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h2>Movie</h2>
//       </div>
//     </div>
//   );
// }

// export default Movies;
