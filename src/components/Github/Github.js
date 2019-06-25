import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllRepos} from '../../actions';
import { Card } from 'antd';
import './Github.css'


class Github extends Component {
    render() {
        const {username} = this.props.data.userData;
        const repos = this.props.data.userRepos.map((repo, i) => {
            const res = {
                cloneUrl: repo.clone_url,
                fullName: repo.full_name,
                forksCount: repo.forks_count,
                language: repo.language,
                pushedAt: repo.pushed_at,
                appUrl: repo.svn_url,
                username: this.props.name
            }
            return res;
        });
 
        return(
            <div className="Github">
                   { 
                       repos.map(e => (
                        <div style={{ background: '#ECECEC', padding: '30px' }}>
                            <Card title={username} bordered={false} style={{ width: 400 }}>
                                <p>Project Name:{e.fullName}</p>
                                <p>Forks Count: {e.forksCount}</p>
                                <p>Language: {e.language}</p>
                                <a href= {e.appUrl}>App Url</a>
                                <p>Pushed At: {e.pushAt}</p>
                            </Card>
                        </div>))
                    }
            </div>
        )
    }
}
function mapStateToProps(data) {
    return data
}
export default connect(mapStateToProps, {getAllRepos})(Github);