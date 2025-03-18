// Representa una tarea individual.

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
        <li 
            className={`flex justify-between items-center bg-gray-800 p-3 rounded-md text-white 
            ${task.completed ? 'line-through text-gray-400' : ''}`}
        >
            <span 
                className="cursor-pointer flex-1 text-left"
                onClick={() => toggleTaskCompletion(task.id)}
            >
                {task.text}
            </span>
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
                onClick={() => deleteTask(task.id)}
            >
            Eliminar
            </button>
        </li>
    );
};

export default Task;

