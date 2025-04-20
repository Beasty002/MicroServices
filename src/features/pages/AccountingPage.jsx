import React, { useState } from "react";

const initialBorrowBooks = [
  {
    id: 1,
    studentName: "Min Raj lama",
    bookName: "Lord of the Rings",
    borrowDate: "10/08/2023",
    returndate: "15/10/2023",
    action: "Returned",
  },
  {
    id: 2,
    studentName: "Suman DevKota",
    bookName: "Book of Five Rings",
    borrowDate: "",
    returndate: "",
    action: "",
  },
  {
    id: 3,
    studentName: "Ramesh Gurung",
    bookName: "Den of Theives",
    borrowDate: "",
    returndate: "",
    action: "",
  },
];

const AccountingPage = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="text-3xl font-bold">Online Book Store</h1>
        <div>
          <button
            onClick={() => handleClick(entry.id)}
            className="rounded-sm bg-blue-500 text-xl px-8 py-1"
          >
            Add
          </button>
        </div>
      </nav>
      <table border="1" cellPadding="10" className="table">
        <thead>
          <tr className="">
            <th>S.N.</th>
            <th>Student Name</th>
            <th>Book Name</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {initialBorrowBooks.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.studentName}</td>
              <td>{entry.bookName}</td>
              <td>{entry.borrowDate || "-"}</td>
              <td>{entry.returndate || "-"}</td>
              <td>{entry.action || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountingPage;
