import React, { useState } from "react";
import UserAdd from "./UserAdd";

const UserTable = ({ overlay }) => {
  const [userList, setUserList] = useState([
    {
      student_id: 1,
      roll_number: 101,
      first_name: "John",
      middle_name: "M.",
      last_name: "Doe",
      dob: "2000-05-15",
      address: "123 Main St, Springfield",
      phone_number: "1234567890",
      course_name: "Computer Science", // course_name instead of course_id
    },
    {
      student_id: 2,
      roll_number: 102,
      first_name: "Jane",
      middle_name: "",
      last_name: "Smith",
      dob: "1999-10-22",
      address: "456 Oak Ave, Metropolis",
      phone_number: "9876543210",
      course_name: "Business Administration",
    },
    {
      student_id: 3,
      roll_number: 103,
      first_name: "Ali",
      middle_name: "Reza",
      last_name: "Khan",
      dob: "2001-01-12",
      address: "789 Elm Rd, Gotham",
      phone_number: "9998887777",
      course_name: "Civil Engineering",
    },
    {
      student_id: 4,
      roll_number: 88,
      first_name: "The",
      middle_name: "Unknown",
      last_name: "Khan",
      dob: "2004-01-12",
      address: "The unknown address",
      phone_number: "9846058585",
      course_name: "Mechanical Engineering",
    },
  ]);

  const [edit, setEdit] = useState(null);

  const handleView = (student_id) => {
    console.log("View with student_id is", student_id);
  };

  const handleEdit = (student_id) => {
    console.log("Edit with student_id is", student_id);
  };

  return (
    <div className="pt-8">
      <table className="w-full border  text-left">
        <thead className="font-black text-xl">
          <tr className="[&>*]:border-gray-400">
            <th className="border px-4 py-2">Roll Number</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Course</th>
            <th className="border px-4 py-2">DOB</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr
              key={user.student_id}
              className="even:bg-gray-700/60 [&>*]:border-gray-400 [&>*]:text-gray-200"
            >
              <td className="border px-4 py-2">{user.roll_number}</td>
              <td className="border px-4 py-2">
                {`${user.first_name} ${
                  user.middle_name ? user.middle_name + " " : ""
                }${user.last_name}`}
              </td>
              <td className="border px-4 py-2">{user.course_name}</td>
              <td className="border px-4 py-2">{user.dob}</td>
              <td className="border px-4 py-2">{user.address}</td>
              <td className="border px-4 py-2">{user.phone_number}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center gap-3">
                  <i
                    className="fa fa-eye text-blue-400 cursor-pointer hover:text-blue-600"
                    onClick={() => handleView(user.student_id)}
                  ></i>
                  <i
                    className="fa fa-pencil text-yellow-400 cursor-pointer hover:text-yellow-600"
                    onClick={() => setEdit(user.student_id)}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {edit && (
        <UserAdd
          type={"edit"}
          student_id={edit}
          overlay={overlay}
          setEdit={setEdit}
        />
      )}
    </div>
  );
};

export default UserTable;
