import React from "react";
import styles from "./Task.module.css";

type TaskProps = {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

const Task = ({ tasks, setTasks }: TaskProps) => {
  const handleRemoveTask = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div className={styles.task_container}>
      {tasks.map((task, index) => (
        <div key={index} className={styles.task_row}>
          <div className={styles.task}>{task}</div>
          <button
            className={styles.delete_btn}
            onClick={() => handleRemoveTask(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
