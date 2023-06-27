import { useState } from "react";
import Task from "../task/Task";
import styles from "./Home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, todo]);
    setTodo("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">To Do List</label>
        <input
          type="text"
          name="task"
          id="task"
          value={todo}
          placeholder="Your task..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
