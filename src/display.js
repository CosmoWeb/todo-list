const display = () => {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");

    const displayTodo = (items) => {
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

    };

    return {displayTodo, displayProject};
}

export {display};

