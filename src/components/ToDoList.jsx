import { List, Typography } from "@mui/material";
import emptyListImage from '../assets/empty.svg';
import ToDo from './ToDo';
import EditDialog from './EditDialog'; 
import DeleteDialog from './DeleteDialog'; 

export default function ToDoList({
    filteredTasks,
    completeTask,
    editTask,
    deleteTask,
    editModalOpen,
    setEditModalOpen,
    deleteModalOpen,
    setDeleteModalOpen,
    editedTask,
    setEditedTask,
    selectedTaskId,
    setSelectedTaskId
}) {
    
    const handleDeleteConfirm = (id) => {
        deleteTask(id);
        setDeleteModalOpen(false);
    };    

    const handleEditSave = () => {
        setEditModalOpen(false);
        editTask(editedTask.id, editedTask.text);
    };

    return (
        <>
            {filteredTasks.length === 0 ? (
                <div>
                    <figure style={{ maxWidth: '14rem', margin: '1rem auto' }}>
                        <img src={emptyListImage} alt="Empty List" style={{ width: '100%' }} />
                    </figure>
                    <Typography align={'center'} variant='h5'>¡Sin tareas por ahora!</Typography>
                </div>
            ) : (
                <List>
                    {filteredTasks.map((task) => (
                        <ToDo
                        key={task.id}
                        task={task}
                        completeTask={completeTask}
                        editTask={() => {
                            setEditedTask(task);
                            setEditModalOpen(true);
                        }}
                        deleteTask={() => {
                            setSelectedTaskId(task.id);
                            setDeleteModalOpen(true)
                        }}
                        />
                    ))}
                </List>
            )}

            {/* Modal de edición */}
            <EditDialog
                open={editModalOpen}
                handleClose={() => setEditModalOpen(false)}
                handleEditSave={() => handleEditSave(editedTask)}
                editedTask={editedTask}
                setEditedTask={setEditedTask}
            />
            {/* Modal de confirmación de eliminación */}
            <DeleteDialog
                open={deleteModalOpen}
                handleClose={() => setDeleteModalOpen(false)}
                handleDeleteConfirm={() => handleDeleteConfirm(selectedTaskId)}
            />
        </>
    );
}
