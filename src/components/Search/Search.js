import React, {useState} from 'react';
import { Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './Search.css';
import GithubInfo from '../GitInfo/GitInfo';
import {config} from '../../config';

import axios from 'axios';

const Search = Input.Search;

 const getUserDetail = async (username) => {
    const res =  await axios(`https://api.github.com/users/${username}?access_token=${config.token}`);
    return res;
}
const SearchProfile = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");

    const handleOnchange = (event) => {
        setUsername(event.target.value);
    }

    const onSearch = async(event) => {
        const {data} = await getUserDetail(username); 
        setName(data.name);
    }

    return(
        <div style={{'position': 'relative'}}>
            <Row type="flex" justify="center" align="middle" >
                <Col>
                    <div style={ {'margin-top': "8%"}}>
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            style={{ width: 400}}
                            // onClick={() => this.handleOnclick()}
                            onSearch={(e) => onSearch(e)}
                            className="Search-inbox"
                            value={username}
                            name='username'
                            onChange={(e) => handleOnchange(e)}
                            />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" align="middle" >
                 <Col>
                    <div style={ {'margin-left': "25%", 'marginTop':"2%"}}>
                        { name && (<GithubInfo />)}
                    </div>
                </Col>
            </Row>
            </div>
    );
}

export default SearchProfile;