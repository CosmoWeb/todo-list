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

export { todoItem };

