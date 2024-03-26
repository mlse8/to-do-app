import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormLabel, TextField, Button } from '@mui/material';

const validationSchema = Yup.object({
    task: Yup.string()
        .min(4, "Debe tener al menos 4 caracteres")
        .max(100, "No puede tener más de 100 caracteres")
        .required("Este campo es obligatorio"),
});

export default function FormFormik ({ addTask }) {
    const handleSubmit = (values, { resetForm }) => {
        addTask({ text: values.task, completed: false });
        resetForm();
    };

    return (
        <Formik
            initialValues={{ task: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, handleBlur, errors, touched }) => (
                <Form>
                    <FormControl fullWidth>
                        <FormLabel htmlFor="task" sx={{mb:2}}>
                            <Field
                                as={TextField}
                                fullWidth
                                id="task"
                                name="task"
                                variant="outlined"
                                color="secondary"
                                value={values.task}
                                label="Ingrese la tarea"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.task && touched.task)}
                                helperText={<ErrorMessage name="task" />}
                            />
                        </FormLabel>
                        <Button type="submit" variant="contained" color="secondary" sx={{mb:2}}>AGREGAR</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    );
};