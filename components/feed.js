import React from 'react';
import Request from 'newsapi';

const url =
  'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=7397a2be83014b4fabcf1fd7bd4f722e';

// var req = new Request(url);
// fetch(req).then(function(response) {
//   console.log(response.json());
// });

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>{articles.map(item => <li key={item.id}>{item.title}</li>)}</ul>
      );
    }
  }
}
export default Feed;
