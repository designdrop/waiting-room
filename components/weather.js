import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Weather = props => (
  <div>
    <h1>Batman TV Shows</h1>
    <div>Yokels: {props.shows}</div>
  </div>
);

Weather.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Weather;
