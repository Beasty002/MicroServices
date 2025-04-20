import React, { useState } from 'react'
import UserAdd from './UserAdd';
import UserTable from './UserTable';

const UsersPage = () => {
  const [studentList, setStudentLIst] = useState()
  const [addStudent,setAddStudent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section>
      <nav className='flex w-full gap-6'>
      <form action="" className='flex border rounded-sm px-2 py-1 border-gray-500 flex-1 justify-between' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search Students....' className='outline-none w-full'/>
        <button className='text-gray-500 cursor-pointer'><i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <button className='text-white bg-blue-600 rounded-sm px-4 cursor-pointer hover:bg-blue-700' onClick={()=> setAddStudent(true)}>Add Student</button>
      </nav>

      <section>
        {
          addStudent && <UserAdd overlay={setAddStudent} type={"add"}/>
        }
      </section>

      <UserTable overlay={setAddStudent}/>
     
    </section>
  )
}

export default UsersPage