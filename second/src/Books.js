import Book from "./Book";
import "./Books.css";
function Books()
{
    return(
        <div className="books">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}
export default Books;