const display = () => {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");

    const displayTodo = (items) => {
        main.textContent = "";
        for(const item of items){
            const card = document.createElement("div");
            const title = document.createElement("h3");
            const date = document.createElement("span");

            main.appendChild(card);
            card.appendChild(title);
            card.appendChild(date);

            title.textContent = item.title;
            date.textContent = item.dueDate;
        }
    };

    const displayProject = (items) => {
        sidebar.textContent = "";
        for(const item of items){
            const projectTitle = document.createElement("div");
            sidebar.appendChild(projectTitle);
            projectTitle.textContent = item.title;
        }
    };

    return {displayTodo, displayProject};
}

export {display};

