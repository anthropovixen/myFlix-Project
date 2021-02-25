const mongoose = require('mongoose');
const { stringify } = require('uuid');

let movieSchema = mongoose.Schema({
	Title: { type: String, required: true },
	Description: { type: String, required: true },
	Genre: {
		Name: String,
		Description: String,
	},
	Director: {
		Name: String,
		Bio: String,
	},
	Actors: [String],
	ImagePath: String,
	Featured: Boolean,
});

let userSchema = mongoose.Schema({
	Username: { type: String, required: true },
	Password: { type: String, required: true },
	Email: { type: String, required: true },
	Birthday: Date,
	FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }],
});

let directorSchema = mongoose.Schema({
	Genre: {
		Name: String,
		Bio: String,
	},
});

let genreSchema = mongoose.Schema({
	Director: {
		Name: String,
		Description: String,
	},
});

let Movies = mongoose.model('Movies', movieSchema);
let Users = mongoose.model('Users', userSchema);
let Directors = mongoose.model('Directors', directorSchema);
let Genres = mongoose.model('Genres', genreSchema);

module.exports.Movies = Movies;
module.exports.Users = Users;
module.exports.Directors = Directors;
module.exports.Genres = Genres;
