import "./App.css";

export default function App() {
  const movies = [
    {
      name: "Irudhi Suttru",
      poster:
        "https://static.toiimg.com/thumb/msid-61285285,width-219,height-317,imgsize-38918/61285285.jpg",
      summary:
        "A former boxer quits boxing following an argument with the authorities over underlying politics. He goes on to coach a fisherwoman so that he can fulfil his dreams through her.",
      rating: "7.6"
    },
    {
      name: "Ghilli",
      poster: "https://moviesonlinehot.files.wordpress.com/2018/03/ghilli.jpg",
      summary:
        "Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes.",
      rating: "8"
    },
    {
      name: "Sarpatta Parambarai",
      poster:
        "https://www.filmibeat.com/img/popcorn/movie_posters/sarpatta-20201202111830-18796.jpg",
      summary:
        "When Sarpatta Parambarai is challenged to a do-or-die match, Kabilan, a young labourer, must choose whether to put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics.",
      rating: "8.7"
    },
    {
      name: "Sachein",
      poster:
        "https://images.jdmagicbox.com/comp/jd_social/news/2018jul30/image-172636-2vcm7gonnn.jpg",
      summary:
        "Genelia and Vijay are college classmates who become good friends; Vijay eventually expresses his love for Genelia, but she rejects it; in response, Vijay confidently tells her that she will fall in love with him in 30 days.",
      rating: "7.4"
    },
    {
      name: "Manmadhan",
      poster:
        "https://www.themoviedb.org/t/p/w500/g1XtY3nqlzHADr45yH0LkHSaeGw.jpg",
      summary:
        "When Mythili meets Mathan, she's at once attracted and terrified since he looks exactly like the serial killer from her nightmares; in fact, he fits the description of a man who targets women in bars.",
      rating: "7.2"
    }
  ];
  return (
    <div className="App">
      {movies.map((ele) => (
        <Move
          name={ele.name}
          poster={ele.poster}
          summary={ele.summary}
          rating={ele.rating}
        />
      ))}
    </div>
  );
}
function Move({ name, poster, summary, rating }) {
  return (
    <div>
      <h1>MY FAVOURITE MOVIE </h1>
      <h2>{name} </h2>
      <img className="pro-pic" src={poster} alt="Movie-Poster" />

      <p>
        <b>Summary:</b>
        {summary}
      </p>
      <h3>Rating:{rating}/10</h3>
    </div>
  );
}
