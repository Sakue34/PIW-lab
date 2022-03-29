"use strict";

const createTask = (text, form, input, list) => {
    if (text === "")
        return;

    const task = document.createElement("div");
    task.classList.add("task");

    const task_content = document.createElement("div");
    task_content.classList.add("content");

    task.appendChild(task_content);

    const task_input = document.createElement("input");
    task_input.type = "text";
    task_input.value = text;
    task_input.classList.add("text");
    task_input.setAttribute("readonly", "readonly");

    task_content.appendChild(task_input);
    
    const task_actions = document.createElement("div");
    task_actions.classList.add("actions");

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerText = "Edit";

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerText = "Delete";

    const task_done = document.createElement("button");
    task_done.classList.add("done");
    task_done.innerText = "Set as done!";

    task_actions.appendChild(task_edit);
    task_actions.appendChild(task_delete);
    task_actions.appendChild(task_done);
    
    task.appendChild(task_actions);

    const task_date_content = document.createElement("div");
    task_date_content.classList.add("date-content");

    const task_date = document.createElement("p");
    task_date.innerHTML = "";

    task_date_content.appendChild(task_date);

    task.appendChild(task_date_content);

    list.appendChild(task);

    task_edit.addEventListener("click", (e) => {
        if (task_edit.innerText === "Edit") {
            task_edit.innerText = "Save";
            task_input.removeAttribute("readonly");
            task_input.focus();
        } else {
            task_edit.innerText = "Edit";
            task_input.setAttribute("readonly", "readonly");
        }
    });

    task_delete.addEventListener("click", (e) => {
        //list.removeChild(task);
        $(task).remove();
    });

    task_done.addEventListener("click", (e) => {
        if (task_done.innerText === "Set as done!") {
            task_done.innerText = "Set as not done";
            task_input.style.textDecoration = "line-through";
            task_input.style.color = "#888";

            task_date_content.style.display = "block";
            const today = new Date();
            const today_date_string = "Completed on: " + today.toISOString().slice(0, 10);
            task_date.innerHTML = today_date_string;
        } else {
            task_done.innerText = "Set as done!";
            task_input.style.textDecoration = "none";
            task_input.style.color = "#f5f5f5";
            task_date_content.style.display = "none";
        }
    });
}

window.addEventListener("load", () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const list = document.getElementById("tasks")

    form.addEventListener("submit", (e) => {
		e.preventDefault();
		createTask(input.value, form, input, list);
    });

    createTask("Be awesome", form, input, list);
    createTask("Stay hydrated", form, input, list);
    createTask("Book a flight", form, input, list);
});