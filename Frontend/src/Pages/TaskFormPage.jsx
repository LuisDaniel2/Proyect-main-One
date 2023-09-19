import { useNavigate, useParams} from 'react-router-dom';
import { useTasks } from '../Context/TasksContext';
import { useForm } from 'react-hook-form';

import utc from 'dayjs/plugin/utc';
import { useEffect } from 'react';
import dayjs from 'dayjs';

dayjs.extend(utc);
function TaskFormPage() {

    const { register, handleSubmit, setValue } = useForm();

    const { createTask, getTask, updateTask } = useTasks();

    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if(params.id) {
                const task = await getTask(params.id);
                console.log(task);
                setValue('title', task.title);
                setValue('description', task.description);
                setValue('date', dayjs(task.date).utc().format("YYYY-MM-DD"));
            }
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {

        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
        };

        if(params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }
        navigate('/tasks');
    });

    return(
        <>
            <div className="flex h-[calc(100vh-100px)] items-center justify-center">
             <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                <form onSubmit={onSubmit}>
                    <label htmlFor='title'> Title </label>
                    <input  className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                     type='text' placeholder='Title' 
                     {...register("title")} autoFocus/>


                    <label htmlFor='description'> Description </label>
                    <textarea className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                     rows="3" placeholder='Description' {...register("description")} 
                     autoFocus></textarea>

                    <label htmlFor='date'> Date </label>
                    <input className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                     type='date' {...register('date')}/>

                    <button className='bg-indigo-500 px-3 py-2 rounded-md'> Save </button>
                </form>
             </div>
            </div>
        </>
    );
};

export default TaskFormPage;