import React from "react";
import MovieItem from "./MovieItem";

const moviesData = [
    {
      vote_count: 4592,
      id: 299536,
      video: false,
      vote_average: 8.5,
      title: "Avengers: Final",
      popularity: 160.36938,
      poster_path: "../img/avengers.jpg",
      original_language: "en",
      original_title: "Avengers: Infinity War",
      backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      adult: false,
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      release_date: "2018-04-25"
    },
    {
      vote_count: 1410,
      id: 401981,
      video: false,
      vote_average: 6.4,
      title: "Red Sparrow",
      popularity: 58.167437,
      poster_path: "/vLCogyfQGxVLDC1gqUdNAIkc29L.jpg",
      original_language: "en",
      original_title: "Red Sparrow",
      backdrop_path: "/sGzuQYSTwJvLBc2PnuSVLHhuFeh.jpg",
      adult: false,
      overview:
        "Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
      release_date: "2018-03-01"
    },
    {
      vote_count: 29,
      id: 493922,
      video: false,
      vote_average: 6.7,
      title: "Hereditary",
      popularity: 36.915917,
      poster_path: "/wihYuMsQADWrSaVThaJunM2wR4V.jpg",
      original_language: "en",
      original_title: "Hereditary",
      backdrop_path: "/yVWiOMpzf7gullGvug83r7gMdha.jpg",
      adult: false,
      overview:
        "After their reclusive grandmother passes away, the Graham family tries to escape the dark fate they've inherited.",
      release_date: "2018-06-04"
    },
    {
      vote_count: 4,
      id: 260513,
      video: false,
      vote_average: 7.5,
      title: "Incredibles 2",
      popularity: 31.548805,
      poster_path: "/hL9Uz2vq93vi20oxZEBBaSs4w8U.jpg",
      original_language: "en",
      original_title: "Incredibles 2",
      backdrop_path: "/kqoBtMmiycbbhGLXGkKhL8SdaWB.jpg",
      adult: false,
      overview:
        "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
      release_date: "2018-06-14"
    },
    {
      vote_count: 42,
      id: 385332,
      video: false,
      vote_average: 5.6,
      title: "Terminal",
      popularity: 24.201971,
      poster_path: "/xi7pA3lL6Wb78p6Y6PgWoHDMjrM.jpg",
      original_language: "en",
      original_title: "Terminal",
      backdrop_path: "/bwvxvrHH3nTbcwpEcJhA72kkI94.jpg",
      adult: false,
      overview:
        "In the dark heart of a sprawling, anonymous city, two assassins carry out a sinister mission, a teacher battles a fatal illness, and an enigmatic janitor and a curious waitress lead dangerous double lives. Murderous consequences unravel in the dead of night, as their lives intertwine at the hands of a mysterious criminal mastermind who is hell-bent on revenge.",
      release_date: "2018-05-11"
    },
    {
      vote_count: 173,
      id: 396806,
      video: false,
      vote_average: 5.8,
      title: "Anon",
      popularity: 18.811023,
      poster_path: "/xhBTO9n3fxy3HJt7WlR9h9vvVmk.jpg",
      original_language: "en",
      original_title: "Anon",
      backdrop_path: "/arYvUXhpNRU2GQQut67P5cR0c5m.jpg",
      adult: false,
      overview:
        "Set in a near-future world where there is no privacy, ignorance or anonymity, our private memories are recorded and crime almost ceases to exist. In trying to solve a series of unsolved murders, Sal Frieland stumbles onto a young woman who appears to have subverted the system and disappeared. She has no identity, no history and no record. Sal realizes it may not be the end of crime but the beginning. Known only as 'The Girl', Sal must find her before he becomes the next victim.",
      release_date: "2018-05-03"
    },
    {
      vote_count: 41,
      id: 454619,
      video: false,
      vote_average: 5.6,
      title: "Overboard",
      popularity: 18.502901,
      poster_path: "/qauHzSQJdo9VYX4NKn9PdWnvXOV.jpg",
      original_language: "en",
      original_title: "Overboard",
      backdrop_path: "/6PQyCsluWxE0LPlp2YB6IkMqVQj.jpg",
      adult: false,
      overview:
        "A spoiled, wealthy yacht owner is thrown overboard and becomes the target of revenge from his mistreated employee. A remake of the 1987 comedy.",
      release_date: "2018-05-03"
    },
    {
      vote_count: 21,
      id: 411135,
      video: false,
      vote_average: 5.8,
      title: "Future World",
      popularity: 17.779676,
      poster_path: "/kMA0IalnEEa0PaHRUzzjpTu5xXQ.jpg",
      original_language: "en",
      original_title: "Future World",
      backdrop_path: "/g29nhwmOiYElKW27hzohK6nSwpC.jpg",
      adult: false,
      overview:
        "A young boy searches a future world wasteland for a rumored cure for his dying mother.",
      release_date: "2018-05-25"
    },
    {
      vote_count: 467,
      id: 399174,
      video: false,
      vote_average: 7.9,
      title: "Isle of Dogs",
      popularity: 17.693788,
      poster_path: "/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg",
      original_language: "en",
      original_title: "Isle of Dogs",
      backdrop_path: "/5YtXsLG9ncjjFyGZjoeV31CGf01.jpg",
      adult: false,
      overview:
        "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. The outcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
      release_date: "2018-03-23"
    },
    {
      vote_count: 43,
      id: 341689,
      video: false,
      vote_average: 5.7,
      title: "How to Talk to Girls at Parties",
      popularity: 14.513143,
      poster_path: "/v6mPfyGshwXd1R6kQlMEyZ8Zu2s.jpg",
      original_language: "en",
      original_title: "How to Talk to Girls at Parties",
      backdrop_path: "/hjUkiNj0IWGym554fQs0Gnx4XZG.jpg",
      adult: false,
      overview:
        "A couple of British 1970s teenaged boys, Enn and Vic, go to a party to meet girls, only to find that the girls are very different from the boys' expectations.",
      release_date: "2018-05-05"
    }
  ];

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        }
    }

    removeMovieById = id => {
        const updateMovies = this.state.movies.filter(function(movie){
            return movie.id !== id; 
        });
        
        this.setState({
            movies: updateMovies
        })

    }

    addMovieToWillWatch = movie => {
        const updatemoviesWillWatch = [...this.state.moviesWillWatch];
        updatemoviesWillWatch.push(movie);

        this.setState({
            moviesWillWatch: updatemoviesWillWatch
        })
    }

    removeMovieFromWillWatchById = id => {
      const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(movie){
        return movie.id !== id; 
    });
    
    this.setState({
        moviesWillWatch: updateMoviesWillWatch
    })
    }

    render() {
        return (
            <div className="container">
                <div className="movie-list">{ this.state.movies.map(movie => {
                    return ( 
                        <MovieItem 
                            key={movie.id} 
                            item={movie} 
                            removeMovieById={this.removeMovieById}
                            addMovieToWillWatch={this.addMovieToWillWatch}
                            removeMovieFromWillWatchById={this.removeMovieFromWillWatchById}
                        />
                    )
                    }) }
                </div>
                <div className="count-will-watch">
                    <h1>В избранном: {this.state.moviesWillWatch.length}</h1>
                </div>
                <ul className="list-will-watch">
                  {this.state.moviesWillWatch.map(movie => {
                    return (
                      <li className="item-will-watch" key={movie.id}>
                        <div>
                          <p>{movie.title}</p>
                          <p>{movie.vote_average}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
            </div>
        )
    }
}

export default App;

