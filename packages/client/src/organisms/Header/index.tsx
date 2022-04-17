import { Avatar, Typography } from '@mui/material';
import React, { FC } from 'react';
import AvatarMenu from '../AvatarMenu';

import './index.css';

interface HeaderProps {
    title?: string;
    usesrname?: string;
    avatarSrc?: string;
}

const Header: FC<HeaderProps> = ({
    title,
    usesrname,
    avatarSrc,
}) => {
    return (
        <header className="Header">
            <Typography
                variant="h4"
                component="h1"
                className="Header__title"
            >
                {title}
            </Typography>

            <AvatarMenu>
                <div className="Header__avatarWrap">
                    {usesrname && (
                        <span className="Header__usesrname">
                            {usesrname}
                        </span>
                    )}
                    <Avatar
                        alt={`avatar ${usesrname}`}
                        src={avatarSrc}
                    />
                </div>
            </AvatarMenu>
        </header>
    );
}

export default Header;
