import fetch from "node-fetch";
import List from "../components/List";

function Movie ({results}) {
 
   
    return  (
        <>
       <List results={results} />
        </>
   );
}

Movie.getInitialProps = async  ({
    req,
    res,
    match,
    history,
    location,
    ...ctx
}) => {
    const search = ctx?.query?.query ?? "";
    const response = await fetch(`http://www.omdbapi.com/?apikey=7714b291&s=${search}&type=movie`);
    const data = await response.json() ?? [];
    const results = data.Search ?? [];
  
    return {
      results, 
      // will be passed to the page component as props
    };
  };
  

export default Movie;