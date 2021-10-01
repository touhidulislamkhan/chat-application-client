import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img
                    src={onlineIcon}
                    alt="Online icon"
                    className="onlineIcon"
                />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    <img
                        src={closeIcon}
                        alt="close icon"
                        className="closeIcon"
                    />
                </a>
            </div>
        </div>
    );
};

export default InfoBar;
