import React, {Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Search.css';
import GithubInfo from '../GitInfo/GitInfo';
import {getUserDetail} from '../../service';


const Search = Input.Search;

class SearchProfile extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:'',
            name:'',
            isClicked: false
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleOnchange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});

    }
    onSearch() {
        const {username} = this.state;
        getUserDetail(username).then(({data}) => {
            this.setState({username: data.login, name: data.name})
        })
    }
    render() {
        return(
            <div className="Search">
                <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                style={{ width: 400}}
                onSearch={this.onSearch}
                className="Search-inbox"
                value={this.state.username}
                name='username'
                onChange={this.handleOnchange}
                />
               {this.state.name && (<GithubInfo username={this.state.username} name={this.state.name} />)}
            </div>
        );
    }
}

export default SearchProfile;