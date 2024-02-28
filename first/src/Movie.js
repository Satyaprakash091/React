import "./Movie.css";
function Movie(props) {
    return (
    <div>
      <img src={props.link} alt=""/>
      <h2>{props.title}</h2>
    </div>
  )
}
export default Movie;
//hello
