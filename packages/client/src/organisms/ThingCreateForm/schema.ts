import * as yup from 'yup';

export interface ThingCreateSchema {
    title: string;
    description: string;
    files?: File[];
}

export const initialValues: ThingCreateSchema = {
    title: '',
    description: '',
}

export const validationSchema: yup.SchemaOf<ThingCreateSchema> = yup.object({
    title: yup
        .string()
        .min(6, 'Минимальная длина названия 6 символов')
        .max(50, 'Максимальная длина названия 50 символов')
        .required('Логин обязателен'),
    description: yup
        .string()
        .min(10, 'Минимальная длина описания 10 символов')
        .max(5000, 'Максимальная длина описания 5000 символов')
        .required('Пароль обязателен'),
    files: yup.array(),
});
