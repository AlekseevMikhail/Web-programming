import React from 'react'
import request from "superagent";
import history from "../../history";
import Cookies from "js-cookie";

export default class UserModule extends React.Component{
    render(){
        return(
            <div id={"logout-div"}>
                <a href="#">
                    <span onClick={this.logOut}>Log out</span>
                </a>
            </div>
        )
    }

    logOut(e){
        e.preventDefault()

        request
            .post('http://localhost:1700/api/authorization/logout')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end(function(err, res){
                Cookies.set('is-logged-in','false')
                history.push("/welcome")
            });
    }
}