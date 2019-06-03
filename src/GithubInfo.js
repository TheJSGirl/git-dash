import React, {Component} from 'react';
import axios from 'axios';

class GithubInfo extends Component {

    constructor(props) {
        super(props)
    }

     componentWillReceiveProps(){
        const {data:repos} =  axios(`https://api.github.com/users/${this.props.username}repos`);
        }

        render() {
            return(
                <div>
                    <h1>Github Information of {this.props.name}</h1>
                    
                </div>
            )
        }

}

export default GithubInfo;