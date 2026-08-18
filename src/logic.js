const todoItem = (title, dueDate, priority, notes) => {
    const property = {
        title,
        dueDate,
        priority,
        notes,
        check: false
    }
        
    const editTodo = (newTitle = property.title, newDueDate = property.dueDate, newPriority = property.priority, newNotes = property.notes) => {
        property.title = newTitle;
        property.dueDate = newDueDate;
        property.priority = newPriority;
        property.notes = newNotes;
    };

    const changePriority = (newPriority) => {
        property.priority = newPriority;
    }

    const toggleCheck = () => {
        property.check = !property.check;
    };

    return {property, editTodo, changePriority, toggleCheck};
};

const project = (title) =>{
    title = title;
    const storage = [];

    return {title, storage};
};

export { todoItem, project };