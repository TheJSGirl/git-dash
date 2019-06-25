import React, {Component} from 'react';
import './GitInfo.css';
import {connect} from 'react-redux';
import Github from '../Github/Github';
import {getAllRepos} from '../../service';


class GithubInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    /**
     * This component life cycle use to prevent re-rendering
     * @param {object} nextProps 
     * @param {object} nextState 
     */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.username !== nextProps.username;
    }

    
    /**
     * This component life cycle use to call the api 
     */
    componentDidMount(){
        getAllRepos(this.props.username).then(({data}) => {
            this.setState({repos:data})
        });
    }

    /**
     * This component life cycle use to update the
     */
    componentDidUpdate() {
        getAllRepos(this.props.username).then(({data}) => {
            this.setState({repos:data})
        });
    }

        render() {
            const repos = this.state.repos.map((repo, i) => {
                const repoData = {
                    cloneUrl: repo.clone_url,
                    fullName: repo.full_name,
                    forksCount: repo.forks_count,
                    language: repo.language,
                    pushedAt: repo.pushed_at,
                    appUrl: repo.svn_url,
                    username: this.props.name
                }
            return <Github repoData={repoData} key={i}/>
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

function mapStateToProps(state) {
    return state;
  }


export default connect(null)(GithubInfo);