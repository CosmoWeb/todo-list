const todoItem = (() => {
    const addTodo = (title, dueDate, priority, notes) => {
        title = title;
        dueDate = dueDate;
        priority = priority;
        notes = notes;
        let check = false;

        return { title, dueDate, priority, notes, check };
    }; 

    return {addTodo};
})();

const project = (title) =>{
    const title = title;
    const storage = [];

    return {title, storage};
};

export { todoItem, project };

