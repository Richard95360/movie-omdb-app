import fetch from "node-fetch";
import List from "../components/List";

function Serie ({results}) {
 
   
    return  (
        <>
       <List results={results} />
        </>
   );
}

Serie.getInitialProps = async  ({
    req,
    res,
    match,
    history,
    location,
    ...ctx
}) => {
    const search = ctx?.query?.query ?? "";
    const response = await fetch(`http://www.omdbapi.com/?apikey=7714b291&s=${search}&type=series`);
    const data = await response.json() ?? [];
    const results = data.Search ?? [];
  
    return {
      results, 
      // will be passed to the page component as props
    };
  };
  

export default Serie;