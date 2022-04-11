import { Avatar } from '@mui/material';
import React, { FC } from 'react';

import './index.css';

interface HeaderProps {
    title?: string;
    avatarSrc?: string;
}

const Header: FC<HeaderProps> = ({
    title,
    avatarSrc,
}) => {
    return (
        <header className="Header">
            <div className="Header__avatarWrap">
                {title && (
                    <span className="Header__title">
                        {title}
                    </span>
                )}
                <Avatar
                    alt={`avatar ${title}`}
                    src={avatarSrc}
                />
            </div>
        </header>
    );
}

export default Header;
