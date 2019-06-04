import React, {Component} from 'react';
import axios from 'axios';
import './GitInfo.css';
import Github from '../Github/Github';
import {config} from '../../config';


class GithubInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    async componentWillReceiveProps(){
        const {data} = await axios(`https://api.github.com/users/${this.props.username}/repos?access_token=${config.token}`)
            this.setState({repos:data})

        }

        render() {
            const repos = this.state.repos.map(repo => (
            <Github  
                cloneUrl ={repo.clone_url}
                fullName = {repo.full_name}
                forksCount = {repo.forks_count}
                language = {repo.language}
                pushedAt = {repo.pushed_at}
                appUrl = {repo.svn_url}
                username = {this.props.name}
            />));

            return(
                <div className="Github">
                    <div className="header">
                        <h1>Github Information of {this.props.name}</h1>
                    </div>
                    <div className="Repo">
                        {repos}
                    </div>
                </div>
            )
        }

}

export default GithubInfo;