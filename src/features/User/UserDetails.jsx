import React, { useEffect } from "react";

const UserDetails = ({ idSetter, id }) => {
  const user = {
    first_name: "Ali",
    middle_name: "Reza",
    last_name: "Khan",
    phone_number: "9998887777",
    dob: "2001-01-12",
    address: "789 Elm Rd, Gotham",
    email: "ali.khan@example.com",
    roll_number: 103,
    course_name: "Civil Engineering",
    books: ["DSA", "Introduction to Algorithms", "Design Patterns"],
  };

  const fullName = [user.first_name, user.middle_name, user.last_name]
    .filter(Boolean)
    .join(" ");

  const totalBooks = user.books.reduce((sum, book) => sum + book.quantity, 0);

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/80 text-white text-xl">
      <div
        onClick={() => idSetter("")}
        className="absolute top-0 left-0 w-full h-full"
      ></div>

      <div className="absolute top-1/2 left-1/2 bg-black/90 w-[60%] p-6 rounded-xl border border-white/30 shadow-xl -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex justify-between items-center mb-6 text-2xl font-bold">
          <h1>User Details</h1>
          <i
            className="fa fa-times text-gray-400 hover:text-white cursor-pointer"
            onClick={() => idSetter("")}
          ></i>
        </div>

        <div className="flex gap-6 flex-col">
          {/* User Image */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center text-5xl">
              <i className="fa fa-user-circle text-gray-400"></i>
            </div>
            <h2 className="text-2xl font-semibold">{fullName}</h2>
          </div>

          {/* User Info and Books */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <p>
                <span className="font-medium text-gray-400">Roll No:</span>{" "}
                {user.roll_number}
              </p>
              <p>
                <span className="font-medium text-gray-400">Course:</span>{" "}
                {user.course_name}
              </p>
              <p>
                <span className="font-medium text-gray-400">Email:</span>{" "}
                {user.email}
              </p>
              <p>
                <span className="font-medium text-gray-400">Phone:</span>{" "}
                {user.phone_number}
              </p>
              <p>
                <span className="font-medium text-gray-400">DOB:</span>{" "}
                {user.dob}
              </p>
              <p>
                <span className="font-medium text-gray-400">Address:</span>{" "}
                {user.address}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Borrowed Books :</h3>
              <ul className="list-disc pl-6 space-y-2">
                {user.books.map((book, idx) => (
                  <li key={idx} className="font-medium">
                    {book}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-bold text-blue-800">
                Total Books Borrowed: {user.books.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
