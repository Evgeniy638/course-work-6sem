import { Button, TextField } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import React, { FC, useCallback } from 'react';

import { initialValues, RegistrationSchema, validationSchema } from './schema';
import style from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { PAGE_LIST_THING, PAGE_LOGIN } from '../../common/paths';
import { useDispatch } from 'react-redux';
import { thunkCreators } from '../../store';
import { messageStatuses } from '../../common/messageStatuses';
import { readFilesAsDataURL } from '../../common/readFilesAsDataURL';
import { RegistrationArgs } from '../../api/query/registration';
import DragAndDropImage from '../../molecules/DragAndDropImage';

const RegistrationForm: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSuccess = useCallback(() => {
        navigate(PAGE_LIST_THING);
    }, [navigate]);

    const onSubmit = useCallback(async (values: RegistrationSchema, formikHelpers: FormikHelpers<RegistrationSchema>) => {
        formikHelpers.setSubmitting(true);
        const handleError = (messageStatus: string) => {
            formikHelpers.setSubmitting(false);

            switch (messageStatus) {
                case messageStatuses.USER_ALREADY_EXIST:
                    formikHelpers.setFieldError('login', 'Логин уже занят');
                    break;
            
                default:
                    console.log('messageStatus', messageStatus);
                    break;
            }
        };

        let avatarSrc: string | undefined;

        if (values.files) {
            const imagesData = await readFilesAsDataURL(values.files);
            avatarSrc = imagesData[0].src;
        }

        const registrationData: RegistrationArgs = {
            login: values.login,
            password: values.password,
            fullName: values.fullName,
            avatarSrc,
        }

        dispatch(thunkCreators.registration(registrationData, handleSuccess, handleError));
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
        <form className={style.RegistrationFormBody} onSubmit={formik.handleSubmit}>
            <TextField
                label="логин"
                name="login"
                variant="outlined"
                className={style.ElementForm}
                value={formik.values.login}
                onChange={formik.handleChange}
                error={formik.touched.login && Boolean(formik.errors.login)}
                helperText={formik.touched.login && formik.errors.login}
            />
            <TextField
                label="пароль"
                name="password"
                type="password"
                variant="outlined"
                className={style.ElementForm}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                label="повторите пароль"
                name="passwordAgain"
                type="password"
                variant="outlined"
                className={style.ElementForm}
                value={formik.values.passwordAgain}
                onChange={formik.handleChange}
                error={formik.touched.passwordAgain && Boolean(formik.errors.passwordAgain)}
                helperText={formik.touched.passwordAgain && formik.errors.passwordAgain}
            />
            <TextField
                label="полное имя"
                name="fullName"
                variant="outlined"
                className={style.ElementForm}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <DragAndDropImage
                name="files"
                className={style.ElementForm}
                onChange={handleChangeImages}
            />
            <Button
                type="submit"
                variant="contained"
                className={style.ElementForm}
                disabled={formik.isSubmitting}
            >
                Зарегестрироваться
            </Button>
            <Link to={PAGE_LOGIN}>
                Войти
            </Link>
        </form>
    );
}

export default RegistrationForm;
