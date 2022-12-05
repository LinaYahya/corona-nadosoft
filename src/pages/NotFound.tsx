import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div>
      <p>
        The page you were looking for could not be found. The page could be
        removed or you miss spelt the word while searching for it.
      </p>
      <Link to="/">
        <button
        >
          Back Home
        </button>

      </Link>

    </div>
  );
}

export default PageNotFound;
