{
    const tasks = [
       
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
            render()
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done
        render()
    };

    const bindEvents = () => {

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index)
           });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done")

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index)
           });
        });
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

        bindEvents()
    };

    

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if(newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }

    const init = () => {
        render()

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    };

    init()
} 