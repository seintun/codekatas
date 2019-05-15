/**
 * You are given a playlist: array of songs
 * Return an object of genres with one song based on the highest playCount per its genre
Output
{
  pop:  { 
    title: 'ME!',
    author: 'Taylor Swift',
    playCount: 1057396,
    genres: [ 'pop' ] 
  }, 
  rock: { 
    title: 'Sucker',
    author: 'Jonas Brother',
    playCount: 774711,
    genres: [ 'pop', 'rock' ] 
  },
  soul: { 
    title: 'Talk',
    author: 'Khalid',
    playCount: 972062,
    genres: [ 'r&b', 'soul' ] 
  },
  r&b:  {
    title: "Truth Hurts",
    author: "Lizzo",
    playCount: 1073131,
    genres: ["r&b"]
  },
  dance:  { 
    title: 'Here With Me',
    author: 'Marshmello',
    playCount: 455213,
    genres: ["dance", "electric"] 
  },...
}
*/

function filterGenrePlayCount(playlist) {
  let result = {};
  for (const song of playlist) {
    for (const genre of song.genres) {
      if (!result[genre]) result[genre] = song;
      else {
        if (song.playCount > result[genre].playCount) {
          result[genre] = song;
        }
      }
    }
  }
  console.log(result);
}

const library = [
  {
    title: "ME!",
    author: "Taylor Swift",
    playCount: 1057396,
    genres: ["pop"]
  },
  {
    title: "Talk",
    author: "Khalid",
    playCount: 972062,
    genres: ["r&b", "soul"]
  },
  {
    title: "7 rings",
    author: "Ariana Grande",
    playCount: 755267,
    genres: ["pop"]
  },
  {
    title: "Sucker",
    author: "Jonas Brother",
    playCount: 774711,
    genres: ["pop", "rock"]
  },
  {
    title: "Bad Guy",
    author: "Billie Eilish",
    playCount: 1415477,
    genres: ["alternative", "indie"]
  },
  {
    title: "If I cant have you",
    author: "Shawn Mendes",
    playCount: 1217307,
    genres: ["disco"]
  },
  {
    title: "Truth Hurts",
    author: "Lizzo",
    playCount: 1073131,
    genres: ["r&b"]
  },
  {
    title: "Here With Me",
    author: "Marshmello",
    playCount: 455213,
    genres: ["dance", "electric"]
  },
  {
    title: "Wake Me Up",
    author: "Truth",
    playCount: 10731,
    genres: ["dance"]
  }
];
filterGenrePlayCount(library);
