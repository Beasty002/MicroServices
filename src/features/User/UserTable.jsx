import React, { useState } from 'react';
import UserAdd from './UserAdd';

const UserTable = ({overlay}) => {
  const [userList, setUserList] = useState([
    {
      id: 1,
      roll_number: 101,
      first_name: "John",
      middle_name: "M.",
      last_name: "Doe",
      dob: "2000-05-15",
      address: "123 Main St, Springfield",
      phone_number: "1234567890"
    },
    {
      id: 2,
      roll_number: 102,
      first_name: "Jane",
      middle_name: "",
      last_name: "Smith",
      dob: "1999-10-22",
      address: "456 Oak Ave, Metropolis",
      phone_number: "9876543210"
    },
    {
      id: 3,
      roll_number: 103,
      first_name: "Ali",
      middle_name: "Reza",
      last_name: "Khan",
      dob: "2001-01-12",
      address: "789 Elm Rd, Gotham",
      phone_number: "9998887777"
    }
  ]);
  const [edit,setEdit] = useState(null)

  const handleView = (id) => {
    console.log("View with Id is", id);
  };

  const handleEdit = (id) => {
    console.log("Edit with id is", id);
  };

  return (
    <div className="pt-8">
      <table className="w-full border border-gray-300 text-left">
        <thead className="font-black text-xl">
          <tr>
            <th className="border px-4 py-2">Roll Number</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">DOB</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.id} className="even:bg-gray-700/60">
              <td className="border px-4 py-2">{user.roll_number}</td>
              <td className="border px-4 py-2">
                {`${user.first_name} ${user.middle_name ? user.middle_name + " " : ""}${user.last_name}`}
              </td>
              <td className="border px-4 py-2">{user.dob}</td>
              <td className="border px-4 py-2">{user.address}</td>
              <td className="border px-4 py-2">{user.phone_number}</td>
              <td className="border px-4 py-2">
                <div className='flex justify-center gap-3'>
                <i 
                  className="fa fa-eye text-blue-400 cursor-pointer hover:text-blue-600" 
                  onClick={() => handleView(user.id)}
                ></i>
                <i 
                  className="fa fa-pencil text-yellow-400 cursor-pointer hover:text-yellow-600" 
                  onClick={() => setEdit(user.id)}
                ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        edit && <UserAdd type={"edit"} id={edit} overlay={overlay} setEdit={setEdit}/>
      }
    </div>
  );
};

export default UserTable;
