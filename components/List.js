import { Fragment } from "react";
import Card from "../components/Card";

const List = (props) => {
  if (!props.results.length) return <p>No Results :(</p>;
  return (
    <div style={{ height: "calc(100vh - 180px)", overflow: "scroll" }}>
      {props.results && props.results.map((result) => <Card {...result} />)}
    </div>
  );
};

export default List;
