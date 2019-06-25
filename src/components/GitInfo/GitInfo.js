import React, {Component} from 'react';
import './GitInfo.css';
import {connect} from 'react-redux';
import Github from '../Github/Github';
import {getAllRepos} from '../../actions';


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
        const {username} = this.props.data.userData;
        this.props.getAllRepos(username);
    }

    /**
     * This component life cycle use to update the
     */
    componentDidUpdate() {
        const {username} = this.props.data.userData;
        this.props.getAllRepos(username);

    }

        render() {
            const repos = this.props.data.userRepos.map((repo, i) => {
                console.log("repos---", repo)
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
                        <h1>Github Information of {this.props.data.userData.name}</h1>
                    </div>
                    <div className="Repo">
                        <Github />
                    </div>
                </div>
            )
        }

}

function mapStateToProps(data) {
    return data;
  }


export default connect(mapStateToProps, {getAllRepos})(GithubInfo);