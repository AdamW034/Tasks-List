{
    const tasks = [
        {
            content: "cokolwiek",
            done: true,
        },
        {
            content: "ukończyć pracę domową",
            done: false,
        },
    ]

    const render = () => {
        let htmlString = "";
        
        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " class=\"section__listItem\"" : ""}>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-list").innerHTML = htmlString
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

        render();
    }

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