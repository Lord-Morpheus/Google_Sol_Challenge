import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const BookPage = () => {
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/resources/get/${id}`);
        const data = await response.json();
        setBook(data.data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch book details", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;   // replace with loading icon
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <h1>{book.name}</h1>
      <img src={book.imageUrl} alt={book.name} />
      <p>Author: {book.author.join(", ")}</p>
      <p>Genre: {book.genre.join(", ")}</p>
      <p>Language: {book.language}</p>
      <p>Publication: {book.publication}</p>
      <p>Published Year: {book.publishedYear}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.userRating}/5</p>
      <p>Number of Ratings: {book.numUserRated}</p>
    </div>
  );
};

export default BookPage;