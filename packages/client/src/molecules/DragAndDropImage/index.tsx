import React, { ChangeEventHandler, DragEventHandler, FC, useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import ImageIcon from '@mui/icons-material/Image';
import dragImage from './drag.png';


import style from './index.module.css';
import { readFilesAsDataURL } from '../../common/readFilesAsDataURL';

interface DragAndDropImageProps {
    className?: string;
    name?: string;
    onChange: (images: File[]) => void;
}

const DragAndDropImage: FC<DragAndDropImageProps> = ({
    className,
    name,
    onChange,
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const timerRef = useRef<number>();
    const [dropImage, setDropImage] = useState<string>();

    const handleChange = useCallback(async (imageFile: File) => {
        onChange([imageFile]);
        const [dropImage] = await readFilesAsDataURL([imageFile]);
        setDropImage(dropImage.src);
    }, [onChange]);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(async (e) => {
        if (e.currentTarget.files) {
            const files = Array.from(e.currentTarget.files);
            handleChange(files[0]);
        }
    }, [handleChange]);

    const onDrop: DragEventHandler<HTMLLabelElement> = useCallback((e) => {
        e.preventDefault();
        const arrImageFiles = Array.from(e.dataTransfer.files);

        if (arrImageFiles.length > 0) {
            handleChange(arrImageFiles[0]);
        }
    }, [handleChange]);

    const onDragOver: DragEventHandler<HTMLLabelElement> = useCallback((e) => {
        e.preventDefault();
        window.clearTimeout(timerRef.current);
        setIsDragOver(true);
    }, []);

    const onDragLeave: DragEventHandler<HTMLLabelElement> = useCallback((e) => {
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setIsDragOver(false);
        }, 100);
    }, []);

    return (
        <label
            className={classNames(className, style.wrap)}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            {dropImage
                ? (
                    <img className={style.dropImage} src={dropImage} alt="dropImage"/>
                )
                : (
                    <div className={classNames(style.main, {
                        [style.mainActive]: isDragOver,
                    })}>
                        {isDragOver
                            ? <ImageIcon className={style.image} />
                            : <img className={style.image} src={dragImage} alt="dragImage" />
                        }
                    </div>
                )
            }
            <input
                type="file"
                accept="image/*"
                hidden
                name={name}
                onChange={handleInputChange}
            />
        </label>
    )

}

export default DragAndDropImage;
