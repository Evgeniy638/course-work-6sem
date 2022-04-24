import { Button, Rating, TextField, Typography } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkCreators } from '../../store';
import { ReviewCreateSchema, validationSchema } from './schema';

import style from './index.module.css';

interface ReviewFormProps {
    thingId: string
}

const ReviewForm: FC<ReviewFormProps> = ({ thingId }) => {
    const dispatch = useDispatch();

    const initialValues: ReviewCreateSchema = useMemo(() => ({
        text: '',
        raiting: 0,
        thingId,
    }), [thingId]);

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const onFinish = useCallback(() => {
        setIsSubmiting(false);
    }, []);

    const onSubmit = useCallback(async (values: ReviewCreateSchema, formikHelpers: FormikHelpers<ReviewCreateSchema>) => {
        setIsSubmiting(true);
        dispatch(thunkCreators.createReview(values, onFinish));
    }, [dispatch, onFinish]);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const onChangeRaiting = useCallback((event: React.SyntheticEvent<Element, Event>, value: number | null) => {
        formik.setFieldValue('raiting', Number(value));
    }, [formik]);

    return (
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <TextField
                label="Текст"
                name="text"
                variant="outlined"
                className={style.text}
                value={formik.values.text}
                onChange={formik.handleChange}
                error={formik.touched.text && Boolean(formik.errors.text)}
                helperText={formik.touched.text && formik.errors.text}
                multiline
                minRows={3}
                maxRows={Infinity}
            />
            <div className={style.bottom}>
                <div className={style.raiting}>
                    <div className={style.raitingMain}>
                        <Typography>
                            Оценка:
                        </Typography>
                        <Rating
                            precision={0.5}
                            value={formik.values.raiting}
                            name="raiting"
                            onChange={onChangeRaiting}
                        />
                    </div>
                    {formik.touched.raiting && Boolean(formik.errors.raiting) && (
                        <Typography className="error" variant="caption">
                            {formik.errors.raiting}
                        </Typography>
                    )}
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmiting}
                >
                    Создать
                </Button>
            </div>
        </form>
    )
};

export default ReviewForm;
