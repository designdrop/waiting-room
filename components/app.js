import Feed from './feed';
import Weather from './weather';
import Time from './time';
// import Video from './video-player';
import Footer from './footer';

export default () => (
  <div className="main__wrap">
    <div className="time__wrap">
      <Time />
    </div>
    <div className="feed__wrap">
      <Feed />
    </div>
    <div className="weather__wrap">
      <Weather />
    </div>
    <div className="video__wrap">video player</div>
    <div className="footer__wrap">
      <Footer />
    </div>

    <style jsx global>{`
      .main__wrap {
        margin: 0;
        padding: 0;
        font: 15px Helvetica, Arial, sans-serif;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 2fr 3fr;
      }

      .time__wrap {
        grid-column: 1 / -1;
        justify-self: right;
      }
      .feed__wrap {
        grid-row-start: span 2;
      }
      .feed__wrap ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .feed__wrap li {
        padding: 0;
        margin: 0.5em 0;
      }
      .weather__wrap {
        overflow: hidden;
        align-self: start;
        justify-self: stretch;
      }
      .weather__wrap img {
        width: 100%;
      }
      .video__wrap {
        align-self: stretch;
        display: grid;
      }
      .video__wrap iframe {
        height: 418px;
        justify-self: stretch;
        align-self: stretch;
      }
      .footer__wrap {
        grid-column: 1 / -1;
        justify-self: center;
      }
    `}</style>
  </div>
);
