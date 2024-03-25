import { ListItem, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ToDo({
    task,
    completeTask,
    editTask,
    deleteTask,
}) {
    const handleEditClick = () => {
        editTask(task.id, task.text);
    };

    const handleDeleteClick = () => {
        deleteTask(task.id);
    };

    return (
        <ListItem sx={{ py: 0.5 }}>
            <Checkbox
                color="success"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none", flex: 1 }}>
                {task.text}
            </span>
            <IconButton onClick={handleEditClick} aria-label="edit">
                <EditIcon />
            </IconButton>
            <IconButton onClick={handleDeleteClick} edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
}
