// Formulario para agregar nuevas tareas
import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() === "") return;
        addTask(taskText);
        setTaskText("");
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex justify-between items-center bg-gray-800 p-3 rounded-md mb-4"
        >
            <input 
                type="text" 
                placeholder="Agregar nueva tarea" 
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="flex-1 bg-gray-700 text-white p-2 rounded-md outline-none mr-2"
            />
            <button 
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
            >
                Agregar
            </button>
        </form>
    );
};

export default AddTaskForm;

