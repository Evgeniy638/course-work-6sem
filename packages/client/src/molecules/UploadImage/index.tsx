import { Button, Typography } from '@mui/material';
import React, { ChangeEventHandler, FC, useState } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import style from './index.module.css';

interface UploadImageProps {
    className?: string;
    name?: string;
    multiple?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    onChange: (images: File[]) => void;
}

const UploadImage: FC<UploadImageProps> = ({
    className,
    name,
    multiple,
    variant,
    onChange,
}) => {
    const [imageNames, setImageNames] = useState<string[]>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.files) {
            const files = Array.from(e.currentTarget.files);
            setImageNames(files.map(f => f.name));
            onChange(files);
        }
    };

    return (
        <div className={className}>
            <Button
                variant={variant}
                component="label"
                className={style.Button}
            >
                <PhotoCamera className={style.PhotoCamera} />
                Загрузить картинку
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    multiple={multiple}
                    name={name}
                    onChange={handleChange}
                />
            </Button>
            <Typography variant="caption" display="block">
                {imageNames.join(' ')}
            </Typography>
        </div>
    );
}

export default UploadImage;
