import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProfileTop = ({profile: {status, company, location, website, social, user:{name, avatar}}}) => {
    return (
        <Fragment>
            <div className="profile-top bg-primary p-2">
                <img src={avatar} alt="" className="round-img my-1"/>
                <h1 className="large">{name}</h1>
                <p className="lead">{status} {company && <span>at {company}</span>}</p>
                <p>{location && <span>{location}</span>}</p>
                <div className="icons my-1">
                {
                    website && (
                        <Link to={website} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-globe fa-2x"></i>
                        </Link>
                    )
                }
                {
                    social && social.twitter && (
                        <Link to={social.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-twitter fa-2x"></i>
                        </Link>
                    )
                }
                {
                    social && social.facebook && (
                        <Link to={social.facebook} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-facebook fa-2x"></i>
                        </Link>
                    )
                }
                {
                    social && social.instagram && (
                        <Link to={social.instagram} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-instagram fa-2x"></i>
                        </Link>
                    )
                }
                {
                    social && social.linkedin && (
                        <Link to={social.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-linkedin fa-2x"></i>
                        </Link>
                    )
                }
                {
                    social && social.youtube && (
                        <Link to={social.youtube} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-youtube fa-2x"></i>
                        </Link>
                    )
                }
                </div>
            </div>
        </Fragment>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileTop;
