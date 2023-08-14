import React from "react";

function Table() {
  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      bio: "Lorem ipsum dolor sit amet",
      dob: "1990-01-01",
      gender: "Male",
      username: "johndoe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      bio: "Lorem ipsum dolor sit amet",
      dob: "1992-05-10",
      gender: "Female",
      username: "janesmith",
      email: "jane.smith@example.com",
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      bio: "Lorem ipsum dolor sit amet",
      dob: "1990-01-01",
      gender: "Male",
      username: "johndoe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      bio: "Lorem ipsum dolor sit amet",
      dob: "1992-05-10",
      gender: "Female",
      username: "janesmith",
      email: "jane.smith@example.com",
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      bio: "Lorem ipsum dolor sit amet",
      dob: "1990-01-01",
      gender: "Male",
      username: "johndoe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      bio: "Lorem ipsum dolor sit amet",
      dob: "1992-05-10",
      gender: "Female",
      username: "janesmith",
      email: "jane.smith@example.com",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200 border-b border-gray-300 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-2 px-4 whitespace-nowrap border-r">ID</th>
            <th className="py-2 px-4 whitespace-nowrap border-r">First Name</th>
            <th className="py-2 px-4 whitespace-nowrap border-r">Last Name</th>
            <th className="py-2 px-4 whitespace-nowrap border-r">Bio</th>
            <th className="py-2 px-4 whitespace-nowrap border-r">
              Date of Birth
            </th>
            <th className="py-2 px-4 whitespace-nowrap border-r">Gender</th>
            <th className="py-2 px-4 whitespace-nowrap border-r">Username</th>
            <th className="py-2 px-4 whitespace-nowrap border-r">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-300">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.firstName}</td>
              <td className="py-2 px-4">{item.lastName}</td>
              <td className="py-2 px-4">{item.bio}</td>
              <td className="py-2 px-4">{item.dob}</td>
              <td className="py-2 px-4">{item.gender}</td>
              <td className="py-2 px-4">{item.username}</td>
              <td className="py-2 px-4">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
