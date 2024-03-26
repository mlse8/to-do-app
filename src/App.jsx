import React, { useState } from "react";
import Header from "./components/Header";
import Grid from '@mui/material/Grid';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import TaskFilter from "./components/TaskFilter";
import Footer from "./components/Footer";

export default function App() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(savedTasks);
    const [filter, setFilter] = useState("all");
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editedTask, setEditedTask] = useState(null);
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    const saveTasksToLocalStorage = (updatedTasks) => {
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const addTask = (newTask) => {
        const updatedTasks = [
            ...tasks,
            { id: crypto.randomUUID(), ...newTask },
        ];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const completeTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const editTask = (id, newText) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: newText };
            }
            return task;
        });
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };
    
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return false;
    });

    return (
        <>
            <div style={{ maxWidth: '1400px', padding: '1rem', margin: 'auto', minHeight: '72vh'}}>
            <Header />
            <Grid container spacing={2} justifyContent="space-around">
                <Grid sx={{mt:2.5}} item={true} xs={12} sm={4} md={3}>
                    <Form addTask={addTask} />
                    <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
                </Grid>
                <Grid item={true} xs={12} sm={8}>
                    <ToDoList
                        tasks={tasks}
                        filteredTasks={filteredTasks}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        editModalOpen={editModalOpen}
                        setEditModalOpen={setEditModalOpen}
                        deleteModalOpen={deleteModalOpen}
                        setDeleteModalOpen={setDeleteModalOpen}
                        editedTask={editedTask}
                        setEditedTask={setEditedTask}
                        selectedTaskId={selectedTaskId}
                        setSelectedTaskId={setSelectedTaskId}
                    />
                </Grid>
            </Grid>
            </div>
            <Footer />
        </>
    );
}