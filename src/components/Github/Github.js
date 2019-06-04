import React, {Component} from 'react';
import { Card } from 'antd';
import './Github.css'

class Github extends Component {
    render() {
        const {cloneUrl, username, fullName, forksCount, language, pushAt, appUrl} = this.props;
        return(
            <div className="Github">
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title={username} bordered={false} style={{ width: 300 }}>
                    <p>Project Name:{fullName}</p>
                    <p>Forks Count: {forksCount}</p>
                    <p>Language: {language}</p>
                    <p>App Url: {appUrl}</p>
                    <p>Pushed At: {pushAt}</p>
                </Card>
            </div>
            </div>
        )
    }
}

export default Github;