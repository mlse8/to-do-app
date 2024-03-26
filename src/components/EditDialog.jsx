import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function EditDialog({ 
    open, 
    handleClose, 
    handleEditSave, 
    editedTask, 
    setEditedTask
}) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Tarea</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por favor, modifica la tarea:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Tarea"
                    type="text"
                    fullWidth
                    value={editedTask.text}
                    onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    CANCELAR
                </Button>
                <Button onClick={handleEditSave} color="primary">
                    GUARDAR
                </Button>
            </DialogActions>
        </Dialog>
    );
}