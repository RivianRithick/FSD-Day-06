// Define the Movie class
class Movie {
    // Constructor for the Movie class
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Method to filter movies with a rating of "PG"
function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}

// Create an instance of the Movie class with specific details
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
