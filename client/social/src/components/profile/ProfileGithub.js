import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getGithubRepos} from '../../actions/profile';
import Spinner from '../layout/Spinner';


const ProfileGithub = ({username, getGithubRepos, repos}) => {
    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos]);
    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">Github Repos</h2>
            {repos.map(repo => (
                <div key={repo._id} className="repo bg-white p-1 my-1">
                    <div>
                        <h4>
                            <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</Link>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div>
                        <ul>
                            <li className="badge badge-primary">
                                Stars: {repo.stargazers_count}
                            </li>
                            <li className="badge badge-dark">
                                Stars: {repo.watchers_count}
                            </li>
                            <li className="badge badge-light">
                                Stars: {repo.forks_count}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, {getGithubRepos})(ProfileGithub);
