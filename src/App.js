import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  // react는 class component의 render method를 자동으로 실행

  // setState를 호출하면 render를 다시 실행
  // react는 virtual DOM이기 때문에 변화가 있는 부분만 update

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { // data.data.movies
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() { // fetch data
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
    <section className="container">
      { isLoading ? (
        <div className="loader">
            <span className="loader_text">"Loading..."</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
    );
  }
}

export default App;
