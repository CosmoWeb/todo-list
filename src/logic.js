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

    return { property, editTodo, changePriority, toggleCheck };
};

const project = (title) => {
    title = title;
    const storage = [];

    const addItem = (item) => storage.push(item);

    const removeItem = (item, itemTitle) => {
        if (itemTitle === item.title) {
            const index = storage.indexOf(item);
            storage.splice(index, 1);
        }

    };

    return { title, storage, addItem, removeItem };
};

const projectStorage = [];

export { todoItem, project, projectStorage };