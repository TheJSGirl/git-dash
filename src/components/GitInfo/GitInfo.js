import React, {Component} from 'react';
import './GitInfo.css';
import Github from '../Github/Github';
import {getAllRepos} from '../../service';


class GithubInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    componentDidMount(){
        getAllRepos(this.props.username).then(({data}) => {
            this.setState({repos:data})
        });
    }

        render() {
            const repos = this.state.repos.map(repo => {
                const repoData = {
                    cloneUrl: repo.clone_url,
                    fullName: repo.full_name,
                    forksCount: repo.forks_count,
                    language: repo.language,
                    pushedAt: repo.pushed_at,
                    appUrl: repo.svn_url,
                    username: this.props.name
                }
            return <Github repoData={repoData}/>
        });

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