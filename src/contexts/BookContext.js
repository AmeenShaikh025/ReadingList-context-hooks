import React, { createContext, useState, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";
// import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  //   const [books, setBooks] = useState([
  //     { title: "name of the wind", author: "patrick rothfuss", id: 1 },
  //     { title: "the final empire", author: "brandon sanderson", id: 2 }
  //   ]);
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  //   const addBook = (title, author) => {
  //     setBooks([...books, { title: title, author: author, id: uuid() }]);
  //   };

  //   const removeBook = id => {
  //     setBooks(books.filter(book => book.id !== id));
  //   };

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    //{props.children}
    //</BookContext.Provider>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
