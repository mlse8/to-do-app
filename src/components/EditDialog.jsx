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
                    Modifica la tarea:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Tarea"
                    type="text"
                    fullWidth
                    color="secondary"
                    value={editedTask.text}
                    onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">
                    CANCELAR
                </Button>
                <Button onClick={handleEditSave} color="secondary">
                    GUARDAR
                </Button>
            </DialogActions>
        </Dialog>
    );
}