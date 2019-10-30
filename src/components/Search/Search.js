import React, {Component} from 'react';
import { Input, Row, Col } from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './Search.css';
import GithubInfo from '../GitInfo/GitInfo';
import { getUserDetail } from '../../actions';

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
            <div style={ {margin: "3%",
                "margin-left": "20%",
                'position': "absolute"}}>
                <Row type="flex" justify="center" align="middle" >
                    <Col>
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
                    </Col>
                    { name && (<GithubInfo />)}
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