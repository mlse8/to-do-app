import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function DeleteConfirmationDialog({
    open,
    handleClose,
    handleDeleteConfirm,
}) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirmar Eliminación</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ¿Seguro que deseas eliminar la tarea?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    CANCELAR
                </Button>
                <Button onClick={handleDeleteConfirm} color="error" autoFocus>
                    BORRAR
                </Button>
            </DialogActions>
        </Dialog>
    );
}
