import React from 'react';

import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom'

function Header() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search nobook' type="text" />
                </div>
            </div>

            <div className="header__center">
                <Link to="/" className="header__option
                header__option--active">
                    <HomeIcon frontSize="large" />
                </Link>

                <Link to="./contact" className="header__option">
                    <ContactMailOutlinedIcon frontSize="large" />
                </Link>

                <Link to="./video" className="header__option">
                    <SubscriptionsIcon frontSize="large" />
                </Link>

                <Link to="./about"className="header__option">
                    <InfoOutlinedIcon frontSize="large" />
                </Link>

                <div className="header__option">
                    <SupervisedUserCircleIcon frontSize="large" />
                </div>
            </div>


            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoUrl} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header

