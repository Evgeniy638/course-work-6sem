import * as yup from 'yup';

export interface ReviewCreateSchema {
    text: string;
    raiting: number;
    thingId: string;
}

export const validationSchema: yup.SchemaOf<ReviewCreateSchema> = yup.object({
    text: yup
        .string()
        .min(10, 'Минимальная длина текста 10 символов')
        .max(5000, 'Максимальная длина текста 5000 символов')
        .required('Текст обязателен'),
    raiting: yup
        .number()
        .min(0.5, 'Минимальное значение рейтинга 0.5')
        .required('Рейтинг обязателен'),
    thingId: yup
        .string()
        .required(),
});
