import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/script";

function Book() {
  const { id } = useParams();
  const book =
    data &&
    data.filter((item, i) => {
      return id.replaceAll("-", " ") === item.Title;
    });
  console.log(book);
  return (
    <div>
      {book && (
        <div className="">
          <img src={book[0].Image} alt="" />
          <div className="">
            <p className="">{book[0].Description}</p>
            <p className="">{book[0].Prices}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
