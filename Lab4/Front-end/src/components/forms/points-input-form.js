import React, {Fragment} from 'react'
import TextField from "../inputs/text-field";
import request from "superagent";
import {connect} from "react-redux";
import {addEntry, clearEntries} from "../../actions/actions";
import Cookies from "js-cookie";
import history from "../../history";

class PointsInputForm extends React.Component{
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            r: 0
        };
        this.handleInputChangeR = this.handleInputChangeR.bind(this);
        this.handleInputChangeX = this.handleInputChangeX.bind(this)
    }

    render(){
        return(
            <Fragment>
                <form id={"points-form"}>
                    <label className={"error-label"} id={"entry-form-error"}/>

                    <div> {/*Spinner {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'}*/}
                        <label className={"input-name"}>Select X value</label>
                        <h1 style={{textAlign: 'center'}}>{this.state.x}</h1>
                        <input type="range" min="-2" max="2" value={this.state.x}
                               className="slider" id="myRange" step="0.5" onChange={this.handleInputChangeX}/>
                    </div>
                    <div>
                        <label className={"input-name"}>Enter Y value</label>
                        <TextField type={"text"} name={"y"} id={"y"} label={"Y Value"}
                                   placeholder={"Enter y value"}/>
                    </div>
                    <div>
                        {/*Spinner {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'}*/}
                        <label className={"input-name"} id={"r-label"}>Select R value</label>
                        <h1 style={{textAlign: 'center'}}>{this.state.r}</h1>
                        <input type="range" min="-2" max="2" value={this.state.r}
                               className="slider" id="myRange" step="0.5" onChange={this.handleInputChangeR}/>


                        <div className={"buttons-div"}>
                            <button type={"submit"} className={"button"} onClick={this.submit}>Check</button>
                            <button className={"button"} onClick={this.clear}>Clear</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }


    handleInputChangeR(event){
        this.setState({r: (isNaN(event.target.value) ? 0 : event.target.value)});
    };
    handleInputChangeX(event){
        this.setState({x: (isNaN(event.target.value) ? 0 : event.target.value)});
    };

    submit = (e) => {
        e.preventDefault();

        var x = this.state.x
        var y = document.getElementById('y').value
        var r = this.state.r
        console.log(r)


        let error = document.getElementById("entry-form-error");
        error.innerHTML = ""

        if (x !== undefined && r !== undefined && y !== "") {
            let yValue = y.replace(/\s/g,'').replace(',','.');
            if((!isNaN(yValue)) && !(parseFloat(yValue) >= 3 || parseFloat(yValue) <= -3 )) {
                yValue = parseFloat(yValue).toFixed(5)
                var dispatch = this.props.dispatch;

                request
                    .post('http://localhost:1700/api/entries')
                    .withCredentials()
                    .set('X-Requested-With', 'XMLHttpRequest')
                    .send(JSON.stringify({x: x, y: yValue, r: r}))
                    .type('json')
                    .end(function (err, res) {
                        if (res.ok) {
                            dispatch(addEntry(JSON.parse(res.text)));
                        } else if (res.status === 401) {
                            Cookies.set('is-logged-in','false')
                            history.push("/welcome")
                        }
                    });
            }else error.innerHTML = "Y must be a number in range (-3;3)"
        }else error.innerHTML = "Please select X and enter Y value"

    }

    clear = (e) =>{
        e.preventDefault();
        var dispatch = this.props.dispatch;
        request
            .delete('http://localhost:1700/api/entries')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end(function (err, res) {
                if (res.ok) {
                    dispatch(clearEntries());
                } else if (res.status === 401) {
                    Cookies.set('is-logged-in','false')
                    history.push("/welcome")
                }
            });
    }
}

export default connect(null)(PointsInputForm);