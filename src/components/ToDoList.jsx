import { List, Alert, Button, TextField, Typography } from "@mui/material";
import emptyListImage from '../assets/empty.svg';
import ToDo from './ToDo'

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

            {/* Alerta para modificar */}
            {editModalOpen && (
                <Alert
                    severity="info"
                    color="secondary"
                    variant="outlined"
                    action={
                        <>
                            <Button color="secondary" onClick={() => setEditModalOpen(false)}>CANCELAR</Button>
                            <Button color="secondary" onClick={handleEditSave}>GUARDAR</Button>
                        </>
                    }
                >
                    <TextField
                        fullWidth
                        label="Tarea"
                        value={editedTask.text}
                        onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
                    />
                </Alert>
            )}

            {/* Alerta para confirmar eliminacion */}
            {deleteModalOpen && (
                <Alert
                    severity="warning"
                    variant="outlined"
                    action={
                        <>
                            <Button onClick={() => setDeleteModalOpen(false)}>CANCELAR</Button>
                            <Button onClick={() => handleDeleteConfirm(selectedTaskId)} color="error">BORRAR</Button>
                        </>
                    }
                >
                    ¿Seguro que deseas eliminar la tarea?
                </Alert>
            )}
        </>
    );
}
