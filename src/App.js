import "./App.css";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Switch,Route,Link} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from "react-router-dom";





export default function App() {
  const initialmovielist = [
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
      poster: "https://pbs.twimg.com/media/EVyhuIsU4AANZ1B.jpg",
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
  const[movielist,setMovieList]=useState(initialmovielist);
  const [name,setName]=useState(" ");
  const [poster,setPoster]=useState(" ");
  const [rating,setRating]=useState(" ");
  const [summary,setSummary]=useState(" ");
  return (
    <div className="App">
      <ul>
        <li>
          <Link to ="/movies">Movies</Link>
        </li>
        <li>
          <Link to ="/color-game">Color game</Link>
        </li>
        <li>
          <Link to ="/tic-tac-toe">Tic-Tac-Toe</Link>
        </li>
        <li>
          <Link to ="/">Home</Link>
        </li>
      </ul>
      <Switch>
      <Route path="/movies/:id">
          <MovieDetails/>
         </Route>
        <Route path="/movies"> <div className="add-movie-form"> 

<TextField onChange={(event) => setName(event.target.value)}  label="ENTER MOVIE NAME"  color="primary" focused />

<TextField onChange={(event) =>setPoster(event.target.value)} label="Poster" color="primary" focused />

 <TextField onChange={(event) =>setRating(event.target.value)} label="Rating"  color="primary" focused />

 <TextField onChange={(event) =>setSummary(event.target.value)} label="Summary" color="primary" focused />
 
 <Button  onClick={()=>{
   const newMovie={
     name:name,
     poster:poster,
     rating:rating,
     summary:summary,
   };
   setMovieList([...movielist,newMovie]);
 }} variant="contained">Add Movie</Button>

 </div >
 <div className="movie-list">
 {movielist.map((ele,index) => (
   <Move
     key={index}
     name={ele.name}
     poster={ele.poster}
     summary={ele.summary}
     rating={ele.rating}
      deleteButton ={
      <IconButton
        onClick={()=>{
        console.log(index);
         const copyMovieList =[...movielist];
         copyMovieList.splice(index,1);
         setMovieList(copyMovieList);
      }}
      aria-Label="delete"
      color="error"
      ><DeleteIcon/>
        Delete </IconButton>}
        id={index}
   />
      
 ))}
 </div></Route>
        
        <Route path="/color-game">welcome to color game,still not build this game ,will be upload soon</Route>
        <Route path="/tic-tac-toe">
        <TicTacToe/>
       
        </Route>
        <Route exact path="/">welcome to Home page</Route>
        <Route path="**"><NotFound/></Route>
      </Switch>
     {/* <div className="add-movie-form"> 

     <TextField onChange={(event) => setName(event.target.value)}  label="ENTER MOVIE NAME"  color="primary" focused />
    
     <TextField onChange={(event) =>setPoster(event.target.value)} label="Poster" color="primary" focused />
     
      <TextField onChange={(event) =>setRating(event.target.value)} label="Rating"  color="primary" focused />
  
      <TextField onChange={(event) =>setSummary(event.target.value)} label="Summary" color="primary" focused />
      
      <Button  onClick={()=>{
        const newMovie={
          name:name,
          poster:poster,
          rating:rating,
          summary:summary,
        };
        setMovieList([...movielist,newMovie]);
      }} variant="contained">Add Movie</Button>

      </div >
      <div className="movie-list">
      {movielist.map((ele) => (
        <Move
          name={ele.name}
          poster={ele.poster}
          summary={ele.summary}
          rating={ele.rating}
        />
      ))}
      </div>*/}
    </div>
  );
}
//functin for notfound 
function NotFound(){
  return(
    <div>
      <h1 className="notfound">404 Not Found</h1>
      <img
       width="100%"
        src="https://cdn.dribbble.com/users/2298887/screenshots/5717807/caveman.gif"
      alt="404 Not Found" />
    </div>
  )
}
function Move({ name, poster, summary, rating ,deleteButton,id }) {
  
const [show,setShow]= useState(true);
const history = useHistory();

//conditional styling
 // const summaryStyles={display: show ? "block" : "none", };
  
  return (
    <Card className="movie-card">
      
      <img className="pro-pic" src={poster} alt="Movie-Poster" />

    <CardContent>
      <h2 className="movie-name">{name} </h2>

      <div className="movie-spec">

      <h3>Rating:{rating}/10</h3>
      <IconButton onClick={()=>setShow(!show)} color="primary" aria-label="Toogle description">
  {show ? <ExpandLessIcon/>:<ExpandMoreIcon/>}
</IconButton>

      
      <Counter/>
      </div>
    {deleteButton}
    <IconButton
 onClick={()=>history.push(`/movies/${id}`)}
  color="primary"
   aria-label="Toogle description">
  <InfoIcon/>
</IconButton>
      
      {/*using conditional rndering to hide the summary*/}
     {show ? <p  className="movie-summary">
        <b>Summary:</b>
        {summary}
      </p> :""}
      </CardContent>
    </Card>
  );
}

function Counter(){
  const[like,setLike]=useState(0);
  const[dislike,setDisLike]=useState(0);

  return(
    <div className="counter-conatiner">
  <IconButton className="like-dislike"
      onClick={()=>setLike(like+1)} aria-label="like button" color="primary">
     <Badge badgeContent={like} color="primary">
         👍
       </Badge>
</IconButton>


<IconButton className="like-dislike"
      onClick={()=>setDisLike(dislike+1)} aria-label="dislike button" color="error">
      <Badge badgeContent={dislike} color="error">
      👎
       </Badge>
</IconButton>
      
   
    </div>
  )
}

//Tic -Tac -Toe game code starts here
  function TicTacToe(){

    const [board,setBoard]=useState([null,null,null,null,null,null,null,null,null]);
   //code for deciding  winner 
    const decideWinner=(board)=>{
     const lines=[
       [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],
       [2,5,8],[0,4,8],[2,4,6]
     ];
     for(let i=0;i<lines.length;i++){
       const [a,b,c]=lines[i];
       if (board[a]!== null && board[a]===board[b] && board[b]===board[c]){
         console.log("winner is" ,board[a]);
        return board[a];
    }
     }
       return null;
      };
        
        const winner= decideWinner(board);
        //code for darw

       

    const [isXturn,setIsXTurn]=useState(true);
    const handleClick =(index)=>{
      if(winner===null && board[index]===null){
      const boardCopy = [...board];
     console.log(boardCopy,index);
     boardCopy[index]= isXturn ? "x" : "o";
     setBoard(boardCopy);
     setIsXTurn(!isXturn);
    };}
    return(
      <div className="fullgame">
      <div className="board">
        {board.map((val,index)=>(
        <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
        ))}
      
      </div>
      {winner? <h2>Winner is:{winner}</h2> :""}
      <button onClick={()=>{
        setBoard([null,null,null,null,null,null,null,null,null]);
        setIsXTurn(true);}}>Reset</button>   
      </div>
    );
  
  }
  function GameBox({val,onPlayerClick}){
    //const val="x"
    const styles={
      color:val==="x" ? "green" : "red",
    };
    return(
      <div 
      onClick={()=>onPlayerClick()}
      style={styles}
       className="gamebox">
         {val}   
      </div>
    );
  }

  function MovieDetails(){
    const movie={name: "Irudhi Suttru",
    poster:
      "https://static.toiimg.com/thumb/msid-61285285,width-219,height-317,imgsize-38918/61285285.jpg",
    summary:
      "A former boxer quits boxing following an argument with the authorities over underlying politics. He goes on to coach a fisherwoman so that he can fulfil his dreams through her.",
    rating: "7.6"}
    return(
      
      <div>
        <iframe width="727" height="409" src="https://www.youtube.com/embed/SZsb3IovkK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2 >Name:{movie.name}</h2>

      <h3>Rating:{movie.rating}/10</h3>
      <p>Summary:{movie.summary}</p>
      </div>
    )
  }