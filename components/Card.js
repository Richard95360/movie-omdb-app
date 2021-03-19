const placeholderImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";
const Card = ({ Title, Poster, Year, imdbID }) => {
  return (
    <div class="card" style={{ marginBottom: "10px" }}>
      <div class="card-body d-flex justify-content-between">
        <div class="d-flex align-items-start">
          <a
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            style={{ color: "#9b59b6" }}
          >
            <img
              className="mr-2 rounded"
              src={Poster === "N/A" ? placeholderImg : Poster}
              alt="placeholder"
              width="100"
              height="130"
            />

            <span class="title" style={{ fontSize: "20px" }}>
              {Title}
            </span>
          </a>
        </div>
        <p style={{ fontSize: "20px" }}>{Year}</p>
      </div>
    </div>
  );
};
export default Card;
