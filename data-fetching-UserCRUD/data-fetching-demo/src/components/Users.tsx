import { useEffect, useState } from "react";
import "./Users.css";

// ---------------- TYPES ----------------
type User = {
  id: number;
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // form fields
  const [idInput, setIdInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  // ---------------- FETCH ALL ----------------
  const fetchAllUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!res.ok) throw new Error("Failed to fetch users");

      const data: User[] = await res.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // auto load once
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // ---------------- FETCH BY ID ----------------
  const fetchUserById = async () => {
    if (!idInput) return alert("Enter ID");

    setLoading(true);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${idInput}`
      );

      if (!res.ok) throw new Error("User not found");

      const data: User = await res.json();
      setUsers([data]);
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // ---------------- ADD / UPDATE ----------------
  const handleSave = async () => {
    if (!name || !email) return alert("Fill fields");

    const payload = { name, email };

    try {
      if (editingId) {
        // UPDATE
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${editingId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );

        const updated: User = await res.json();

        setUsers((prev) =>
          prev.map((u) => (u.id === editingId ? updated : u))
        );

        setEditingId(null);
      } else {
        // ADD
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );

        const created: User = await res.json();
        setUsers((prev) => [...prev, created]);
      }

      clearForm();
    } catch {
      alert("Operation failed");
    }
  };

  // ---------------- DELETE ----------------
  const deleteUser = async (id: number) => {
    if (!confirm("Delete user?")) return;

    await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { method: "DELETE" }
    );

    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // ---------------- EDIT ----------------
  const startEdit = (user: User) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const clearForm = () => {
    setEditingId(null);
    setName("");
    setEmail("");
  };

  // ---------------- UI ----------------
  return (
    <div className="users-container">
      <h2>User Management</h2>

      {/* TOOLBAR */}
      <div className="toolbar">
        <button onClick={fetchAllUsers}>Fetch All</button>

        <input
          type="number"
          placeholder="User ID"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />

        <button onClick={fetchUserById}>Fetch By ID</button>
      </div>

      {/* FORM */}
      <div className="form-box">
        <h3>{editingId ? "Update User" : "Add New User"}</h3>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="form-actions">
          <button className="primary" onClick={handleSave}>
            {editingId ? "Update" : "Add"}
          </button>

          {editingId && (
            <button className="secondary" onClick={clearForm}>
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* STATUS */}
      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* TABLE */}
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={4} className="empty">
                No data
              </td>
            </tr>
          )}

          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => startEdit(u)}>Edit</button>
                <button className="danger" onClick={() => deleteUser(u.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
