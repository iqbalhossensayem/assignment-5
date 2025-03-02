const date = new Date();
document.getElementById("date-today").innerHTML = date.toDateString();

const taskBtns = document.querySelectorAll(".task-btn");

for (let i = 0; i < taskBtns.length; i++) {
  const taskBtn = taskBtns[i];

  taskBtn.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    event.target.disabled = true;

    const taskNumber = document.getElementById("task-numb");
    const convertedTaskNumber = parseInt(taskNumber.innerText);

    const taskDone = document.getElementById("task-done");
    const convertedTaskDone = parseInt(taskDone.innerText);

    const remainTask = convertedTaskNumber - 1;
    const doneTask = convertedTaskDone + 1;

    taskNumber.innerText = remainTask;
    taskDone.innerText = doneTask;

    if (remainTask === 0) {
      alert("Congratulations!!! You have completed all the current tasks");
    }
  });
}
