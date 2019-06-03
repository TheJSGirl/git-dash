import React, {Component} from 'react';
import axios from 'axios';

class GithubInfo extends Component {

    constructor(props) {
        super(props)
    }

     componentDidMount(){
        const {data:repos} =  axios(`https://api.github.com/users/${this.props.username}repos`);
        console.log("---------", repos);
        }

        render() {
            return(
                <div>Github Info</div>
            )
        }

}

export default GithubInfo;