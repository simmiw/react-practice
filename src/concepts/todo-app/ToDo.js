import React, { useState } from "react";

let id = 0; // to allocate id, id intitated!

function ToDo() {
  const [currentTask, setCurrentTask] = useState("");
  const [currentArray, setCurentArray] = useState([]);

  const currentTaskData = (event) => setCurrentTask(event.target.value);

  function addTask() {
    let arrayOftask = [
      ...currentArray,
      {
        id: id++, // id being incremented on each new element of array
        task: currentTask,
        status: "nothing",
      },
    ];
    setCurentArray(arrayOftask);
    setCurrentTask("");
  }
  function completeTask(id) {
    const newTasks = [...currentArray];
    newTasks.forEach((item) => {
      if (item.id === id) {
        item.status = "completed";
      }
    });

    setCurentArray(newTasks);
  }

  function pendingTask(id) {
    const newTask1 = [...currentArray];
    newTask1.forEach((item) => {
      if (item.id === id) {
        item.status = "pending";
      }
    });

    setCurentArray(newTask1);
  }

  return (
    <>
      <input
        type="text"
        value={currentTask}
        placeholder="Enter Today's Task"
        onChange={currentTaskData}
      />
      <button onClick={addTask}>Submit Task</button>
      {currentArray.map(function (item) {
        return (
          <div key={item.id}>
            <br />
            <span className="todo-list">
              {item.task}
              <button
                disabled={item.status === "completed"}
                onClick={() => completeTask(item.id)}>
                Complete
              </button>
              <button
                disabled={item.status === "pending"}
                onClick={() => pendingTask(item.id)}>
                Pending
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default ToDo;
