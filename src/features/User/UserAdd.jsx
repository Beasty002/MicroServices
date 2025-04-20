import React, { useEffect, useState } from "react";

const UserAdd = ({ overlay, type, id = null, setEdit = null }) => {
  const [formDetails, setFormDetails] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    phone_number: "",
    dob: "",
    address: "",
    email: "",
    roll_number: "",
    course_id: "",
  });

  const courseList = [
    { course_id: "101", course_name: "Computer Science" },
    { course_id: "102", course_name: "Mechanical Engineering" },
    { course_id: "103", course_name: "Civil Engineering" },
    { course_id: "104", course_name: "Electrical Engineering" },
    { course_id: "105", course_name: "Business Administration" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedValue = value;
    if (id === "roll_number" || id === "phone_number") {
      updatedValue = value ? parseInt(value) : "";
      if (updatedValue < 0) {
        updatedValue = "";
      }
    }

    setFormDetails((prev) => ({ ...prev, [id]: updatedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails.phone_number.length);

    try {
      if (type == "add") {
        console.log("Form submitted:", formDetails);
      } else {
        console.log("User detail updated", { ...formDetails, student_id: id });
      }
      handleOverlay();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOverlay = () => {
    overlay(false);
    if (setEdit) setEdit(null);
  };

  useEffect(() => {
    const existinguser = {
      id: 2,
      first_name: "Jane",
      middle_name: "",
      last_name: "Smith",
      phone_number: 9876543210,
      dob: "1999-10-22",
      address: "456 Oak Ave",
      email: "jane.smith@example.com",
      roll_number: 452,
      course_id: "105",
    };
    if (type === "edit") {
      setFormDetails({ ...existinguser });
    }
  }, []);

  return (
    <section className="text-xl">
      <section
        onClick={handleOverlay}
        className="fixed h-screen w-screen bg-black/80 top-0 left-0"
      ></section>

      <form
        onSubmit={handleSubmit}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-6 border border-white/40 rounded-xl shadow-md w-[70%] flex gap-3 flex-col bg-black/80"
      >
        <div className="flex justify-between mb-7 text-2xl font-bold">
          <h1>
            {" "}
            {type === "add" ? "Add User Details" : "Update user Details"}
          </h1>
          <i
            className="fa fa-times text-gray-500 cursor-pointer"
            aria-hidden="true"
            onClick={handleOverlay}
          ></i>
        </div>

        <section className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="flex flex-col flex-1">
              <label htmlFor="first_name" className="font-medium text-gray-300">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="First Name"
                required
                className="p-2 border border-white/40 rounded-md"
                value={formDetails.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="middle_name"
                className="font-medium text-gray-300"
              >
                Middle Name
              </label>
              <input
                id="middle_name"
                type="text"
                placeholder="Middle Name"
                className="p-2 border border-white/40 rounded-md"
                value={formDetails.middle_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="last_name" className="font-medium text-gray-300">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Last Name"
                required
                className="p-2 border border-white/40 rounded-md"
                value={formDetails.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col flex-3">
              <label htmlFor="course_id" className="font-medium text-gray-300">
                Select Course
              </label>
              <select
                id="course_id"
                required
                value={formDetails.course_id}
                onChange={handleChange}
                className="p-2 border border-white/40 rounded-md bg-black text-white"
              >
                <option value="" disabled hidden>
                  -- Select a Course --
                </option>
                {courseList.map((course) => (
                  <option key={course.course_id} value={course.course_id}>
                    {course.course_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-3">
              <label htmlFor="email" className="font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="p-2 border border-white/40 rounded-md"
                value={formDetails.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col flex-1">
              <label
                htmlFor="roll_number"
                className="font-medium text-gray-300"
              >
                Roll Number
              </label>
              <input
                id="roll_number"
                type="number"
                placeholder="Roll Number"
                required
                className="no-spinner p-2 border border-white/40 rounded-md"
                value={formDetails.roll_number}
                onChange={handleChange}
                min={0}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col flex-1">
              <label htmlFor="dob" className="font-medium text-gray-300">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="p-2 border border-white/40 rounded-md"
                value={formDetails.dob}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="phone_number"
                className="font-medium text-gray-300"
              >
                Phone Number
              </label>
              <input
                id="phone_number"
                type="tel"
                placeholder="Phone Number"
                required
                className="no-spinner p-2 border border-white/40 rounded-md"
                value={formDetails.phone_number}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="font-medium text-gray-300">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Address"
              required
              className="p-2 border border-white/40 rounded-md"
              value={formDetails.address}
              onChange={handleChange}
            />
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            className="font-bold text-2xl px-6 py-2 bg-blue-700 hover:bg-blue-800 cursor-pointer rounded-sm mt-8"
          >
            {type === "add" ? "Submit" : "Update"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserAdd;
