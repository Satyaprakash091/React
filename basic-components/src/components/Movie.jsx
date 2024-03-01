function Movie(props) {
  // const { title, url } = props;
  return (
    <div className="movie">
      <img src={props.url} alt="movies" />
      <h2>{props.title}</h2>
      {props.rating > 8 && <p>rating:{props.rating}</p>}
      <button onClick={() => props.fun(props.title)}>Watch Now</button>
    </div>
  );
}
export default Movie;
