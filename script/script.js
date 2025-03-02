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

    // activity log section

    const historyContainer = document.getElementById("history");

    const taskCard = event.target.closest(".card");

    const taskTitle = taskCard.querySelector(".titles").innerText;

    const createDiv = document.createElement("div");
    createDiv.classList.add(
      "m-4",
      "bg-[#F4F7FF]",
      "p-3",
      "text-[.9rem]",
      "rounded-md"
    );

    createDiv.innerText = `You have completed the task "${taskTitle}" at ${new Date().toLocaleTimeString()}`;

    historyContainer.appendChild(createDiv);

    if (remainTask === 0) {
      alert("Congratulations!!! You have completed all the current tasks.");
    }
  });
}

//  theme button 
const colors = [
  "#8AAAE5,",
  "#C4DFE6 ",
  "#A7BEAE",
  "#89ABE3 ",
  "#E7E8D1",
  "#F9E795 ",
];
const button = document.getElementById("theme-btn");

button.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

//  history clear button

const historyClearBtn = document.getElementById("clear-history");

const historySection = document.getElementById("history");

historyClearBtn.addEventListener("click", function () {
  historySection.innerHTML = "";
});
