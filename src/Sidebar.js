import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MedicalCenter from './MedicalCenter';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (

        <div className="sidebar">

            <SidebarRow src={user.photoURL} title={user.displayName} />
            <Link to="/medical" style={{ textDecoration: 'none', color: 'black' }}>
                <SidebarRow Icon={LocalHospitalIcon} title='Covid 19 Information Center' />
            </Link>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                <SidebarRow Icon={InfoOutlinedIcon} title='About us' />
            </Link>
            <Link to="/video" style={{ textDecoration: 'none', color: 'black' }}>
                <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            </Link>
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />

        </div>

    );
}

export default Sidebar;
