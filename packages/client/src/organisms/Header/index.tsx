import { Avatar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PAGE_LIST_THING } from '../../common/paths';
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
            <Link to={PAGE_LIST_THING} className="LinkWithoutStyle">
                <Typography
                    variant="h4"
                    component="h1"
                    className="Header__title"
                >
                    {title}
                </Typography>
            </Link>

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
