import { useTasks } from '../Context/TasksContext.jsx';
import TaskCard from '../Components/TaskCard.jsx';
import { useEffect } from 'react';

function TasksPage() {

    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if(tasks.length === 0) return (<h1> No hay tareas </h1>);

    return(
        <>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
            {
                tasks.map(task => (
                    <TaskCard task={task} key={task._id}/>
                ))
            }
          </div>   
        </>
    );
};

export default TasksPage;