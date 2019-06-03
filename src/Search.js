import React, {Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Search.css';

const Search = Input.Search;

class SearchProfile extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});

    }
    render() {
        return(
            <div className="Search">
                <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                style={{ width: 400}}
                onSearch={this.search}
                className="Search-inbox"
                value={this.state.username}
                name='username'
                onChange={this.handleOnchange}
                />
            </div>
        );
    }
}

export default SearchProfile;