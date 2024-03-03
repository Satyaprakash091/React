function Book(props)
{
  return(
    <div className="book">
      <a href="#"><img src={props.image} alt="" /></a>
      <h2>{props.title}</h2>
      <span className="price">Price : {props.price}</span>
    </div>
  )
}
export default Book