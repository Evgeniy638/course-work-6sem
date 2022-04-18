import { Button, Paper, TextField } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import React, { FC, useCallback, useState } from 'react';

import { initialValues, ThingCreateSchema, validationSchema } from './schema';
import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { createLinkToThingPage } from '../../common/paths';
import { useDispatch } from 'react-redux';
import { thunkCreators } from '../../store';
import UploadImage from '../../molecules/UploadImage';
import { readFilesAsDataURL } from '../../common/readFilesAsDataURL';
import { Thing } from '../../store/types/typeListThings';
import { PostCreateThingArgs } from '../../api';

const ThingCreateForm: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const handleSuccess = useCallback((thing: Thing) => {
        navigate(createLinkToThingPage(thing.id));
    }, [navigate]);

    const onSubmit = useCallback(async (values: ThingCreateSchema, formikHelpers: FormikHelpers<ThingCreateSchema>) => {
        setIsSubmiting(true);

        let avatarSrc: string | undefined;

        if (values.files) {
            const imagesData = await readFilesAsDataURL(values.files);
            avatarSrc = imagesData[0].src;
        }

        const registrationData: PostCreateThingArgs = {
            title: values.title,
            description: values.description,
            avatarSrc,
        }

        dispatch(thunkCreators.createThing(registrationData, handleSuccess));
    }, [dispatch, handleSuccess]);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const handleChangeImages = useCallback((images: File[]) => {
        formik.setFieldValue('files', images);
    }, [formik])

    return (
        <Paper className={style.RegistrationForm}>
            <form className={style.RegistrationFormBody} onSubmit={formik.handleSubmit}>
                <TextField
                    label="Название"
                    name="title"
                    variant="outlined"
                    className={style.ElementForm}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    label="Описание"
                    name="description"
                    variant="outlined"
                    className={style.ElementForm}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    multiline
                    minRows={3}
                    maxRows={Infinity}
                />
                <UploadImage
                    name="files"
                    className={style.ElementForm}
                    onChange={handleChangeImages}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className={style.ElementForm}
                    disabled={isSubmiting}
                >
                    Создать
                </Button>
            </form>
        </Paper>
    );
}

export default ThingCreateForm;
