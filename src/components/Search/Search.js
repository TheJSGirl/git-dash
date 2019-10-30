import React, {Component} from 'react';
import { Input, Row, Col } from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './Search.css';
import GithubInfo from '../GitInfo/GitInfo';
import { getUserDetail } from '../../actions';
import { relative } from 'path';

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
        this.props.getUserDetail(username);
    }
    render() {
        const {name, username} = this.props.data.userData;
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
                            onSearch={this.onSearch}
                            className="Search-inbox"
                            value={this.state.username}
                            name='username'
                            onChange={this.handleOnchange}
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
}

function mapStateToProps({data}){
    return {
        data
    };
  }

 export default connect(mapStateToProps, {getUserDetail})(SearchProfile)