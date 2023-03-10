{
    let tasks = [];
    let hideDoneTasks = false;
    const buttonsElement = document.querySelector(".js-buttons")

    const addNewTask = (newTaskContent) => {
       tasks = [
            ...tasks,
            {content: newTaskContent}
        ]

        render();
    };

    const removeTask = (index) => {
       tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render()
    };

    const toggleTaskDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            {
                ...tasks[index],
                done: !tasks[index].done,
            },
            ...tasks.slice(index + 1),
        ]
        
        render()
    };

    const toggleAllTaskDone = () => {
        tasks = tasks.map(task => ({ ...task, done: true }));
        render()
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;

        render();
    };

    const bindEvents = () => {

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index)
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index)
            });
        });

        const toggleAllDoneButton = document.querySelector(".js-toggleAllTasksDone");

        if (buttonsElement.innerHTML.includes("js-toggleAllTasksDone")) {
            toggleAllDoneButton.addEventListener("click", () => {
                toggleAllTaskDone()
            });
        };

        const hideDone = document.querySelector(".js-hideDoneTasks");

        if (buttonsElement.innerHTML.includes("js-hideDoneTasks")) {
            hideDone.addEventListener("click", () => {
                toggleHideDoneTasks()
            });
        };

    };

    const renderButtons = () => {

        if (tasks.length > 0) {
            buttonsElement.innerHTML =
                `<button class=\"section__buttons js-hideDoneTasks\">${hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone</button><button class=\"section__buttons js-toggleAllTasksDone\" ${tasks.every(({done}) => done) ? "disabled" : ""}>Ukończ wszystkie</button>`
        } else {
            buttonsElement.innerHTML = ""
        };

        bindEvents();
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="section__listItem">
                <button class="section__buttonDone js-done">${task.done ? "&#10004;" : ""}</button>  <span ${task.done ? "class =\"section__listItem--done\"" : ""}>${task.content}</span> <button class="section__buttonRemove js-remove">🗑</button>
            </li>
            `;
        }

        document.querySelector(".js-list").innerHTML = htmlString

        bindEvents();

    };



    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        document.querySelector(".js-newTask").focus();
        document.querySelector(".js-newTask").value = "";
    };

    const init = () => {
        render()
        renderButtons()

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    };

    init()

}