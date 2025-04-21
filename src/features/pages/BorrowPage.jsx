import { useState } from "react";

export default function BorrowPage() {
  const [rollNo, setRollNo] = useState("");

  const books = [
    { id: 1, name: "Book of Five Rings" },
    { id: 2, name: "Den of Thieves" },
    { id: 3, name: "Lord of the Rings" },
    { id: 4, name: "Da Vinci Code" },
    { id: 5, name: "Alice in Wonderland" },
    { id: 6, name: "A Song of Fire and Ice" },
    { id: 7, name: "A Court of Mist and Fury" },
    { id: 8, name: "Vanishing World" },
  ];

  function handleinput(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleinput} className="formCss">
        <div className="form-group">
          <label htmlFor="rollNo">Roll No</label>
          <input
            id="rollNo"
            className="input"
            type="number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter roll number"
            min={0}
          />
          <button className="button" type="submit">
            Check
          </button>
        </div>
      </form>

      <form>
        <ul className="flex flex-col gap-4">
          {books.map((book, index) => (
            <li>
              <label
                htmlFor={book.id}
                key={index}
                className="flex gap-6 cursor-pointer"
              >
                <input type="checkbox" name="" id={book.id} value={book.id} />
                {book.name}
              </label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
