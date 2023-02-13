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
            <li>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-list").innerHTML = htmlString
    };

    const init = () => {
        render()
    };

    init()
}