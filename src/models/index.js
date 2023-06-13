const Genre = require('../models/Genre');
const Artist = require('../models/Artist');
const Album = require('./Album');
const Song = require('./Song');

//tabka povite: "genreartist"
Genre.belongsToMany(Artist,{through: "GenreArtist"})
Artist.belongsToMany(Genre,{through: "GenreArtist"})


//album -> artistId
Album.belongsTo(Artist) //artistid
Artist.hasMany(Album)

//Song -> albumId
Song.belongsTo(Album) //albumid
Album.hasMany(Song)


//tabka povite: "SongArtist"
Song.belongsToMany(Artist,{through: "SongArtist"})
Artist.belongsToMany(Song,{through: "SongArtist"})

//tabka povite: "SongArtist"
Song.belongsToMany(Genre,{through: "SongGenre"})
Genre.belongsToMany(Song,{through: "SongGenre"})
