class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
  }
}

// Casino output
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale); 

// Create an array of Movie instances
const movies = [
  new Movie("Udhaya", "Thirupathi Brother", "PG"),
  new Movie("Jailer", "Sun Pictures", "4.9"),
  new Movie("Leo", "Seven screen studio", "PG-13"),
  new Movie("Mullum malarum", "ratchasan studio"),
];

// PG-rated 
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
