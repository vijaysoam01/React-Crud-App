import React, { useState } from "react";

const Crud = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    active: "",
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      // UPDATE
      const updatedUsers = users.map((user, index) =>
        index === editIndex ? form : user
      );
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      // CREATE
      setUsers((prev) => [...prev, form]);
    }

    setForm({
      name: "",
      email: "",
      number: "",
      active: "",
    });
  };

  const handleDelete = (index) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex gap-10 p-8">
      
      {/* LEFT → FORM */}
      <div className="bg-white p-5 rounded-xl shadow-md w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <div className="flex flex-col gap-4">
          
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Number</label>
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter number"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Status</label>
            <input
              name="active"
              value={form.active}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="yes / no"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md mt-4 transition text-sm shadow"
        >
          {editIndex !== null ? "Update" : "Save"}
        </button>
      </div>

      {/* RIGHT → TABLE */}
      <div className="bg-white p-5 rounded-xl shadow-md flex-1 max-w-[950px]">
        <div className="h-[300px] overflow-y-auto">
          <table className="w-full border-collapse">
            
            <thead className="bg-blue-100 text-gray-700 sticky top-0">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Number</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((e, index) => (
                <tr
                  key={index}
                  className={`border-t text-center hover:bg-gray-50 transition ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="p-2">{e.name}</td>
                  <td className="p-2">{e.email}</td>
                  <td className="p-2">{e.number}</td>

                  <td>
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        e.active === "yes" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {e.active}
                    </span>
                  </td>

                  <td className="p-2 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Crud;