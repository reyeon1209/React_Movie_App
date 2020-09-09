import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component{
  // react는 class component의 render method를 자동으로 실행

  // setState를 호출하면 render를 다시 실행
  // react는 virtual DOM이기 때문에 변화가 있는 부분만 update

  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() { // fetch data
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    return (
    <div>
      {isLoading ? "Loading..." : "We are ready"}
    </div>
    );
  }

}

export default App;
