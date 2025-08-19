import React, { useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

const TodoListIndex: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { text: "Học", completed: false },
    { text: "Di chơi", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = () => {
    if (!newTask.trim()) return;
    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex].text = newTask;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
    setNewTask("");
  };

  const handleEdit = (index: number) => {
    setNewTask(tasks[index].text);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggle = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div style={{ maxWidth: "600px", fontFamily: "sans-serif"}}>
      <h2 style={{ textAlign: "center" }}>Quản lý công việc<canvas></canvas></h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          placeholder="Thêm công việc"
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "8px 16px",
            backgroundColor: "#29b6f6",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {editingIndex !== null ? "Cap nhat" : "Them"}
        </button>
      </div>

      <div style={{ marginBottom: "10px", color: "#3f51b5", fontWeight: "bold" }}>
        Tat ca cong viec
        <hr style={{ border: "1px solid #3f51b5", width: "150px", marginLeft: 0 }} />
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: "#f5f7f8",
              borderRadius: "6px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#888" : "#000",
                }}
              >
                {task.text}
              </span>
            </div>
            <div>
              <button
                onClick={() => handleEdit(index)}
                style={{
                  marginRight: "10px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color:"black"
                }}
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListIndex;
