import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {SERVER_URL} from "../constants";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const buttonStyle = {
    marginTop: "10px"
};

const labelStyle = {
    fontSize : "22px",
    align: "center",
    paddingLeft: "30px"

};

const MainBackground = {
    background: "linear-gradient(to right, #F6EFD2, #CEAD78)",
    height: "400px",
    align: "center",
    paddingTop: "30px",
    paddingBottom: "400px"
};

const TableCssExtra = {
    background : "linear-gradient(to top left, #ffff99 0%, #cc99ff 100%)",
    border: "1px solid grey",
    width: "550px",
    height: "360px",
    position: "absolute",
    left: "30%",
    align: "center",
    paddingTop: "10px"

};

const TextFieldCssExtra = {
    fontWeight: "bold",
    width: "180px",
};

class FormManagerExtra extends Component{
    constructor(props) {
        super(props);
        this.state = {personExtraId: 1 ,outfit: "",alignment:"",politeness:"",honestly: null,personState: ""};
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({personExtraId: this.state.personExtraId + 1});
        let newManagerExtra = {outfit: this.state.outfit, alignment: this.state.alignment, politeness: this.state.politeness,
        honestly: this.state.honestly, personState: this.state.personState};
        // alert(JSON.stringify(newManagerExtra));
        this.addManagerExtraData(newManagerExtra);
    };

    addManagerExtraData = (manager) => {
        fetch(SERVER_URL + '/outputDataExtra',
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(manager)
            })
            .then(function(manager) {
                console.log(manager)
            })
            .catch(err => console.error(err))
    };

    checkButton = () => {
        return !(this.state.outfit !== '' &&
            this.state.alignment !== '' &&
            this.state.politeness !== '' &&
            this.state.honestly !== null &&
            this.state.personState !== '')
    };

    render() {
        return(
            <div style={MainBackground} className="App">
                <label style={labelStyle}>Extra Information</label>
                <form style={TableCssExtra}>
                    <TextField style={TextFieldCssExtra} label="Outfit" placeholder="Outfit"
                               name="outfit"  onChange={this.handleChange}/><br/>
                    <TextField style={TextFieldCssExtra} label="Alignment" placeholder="Alignment"
                               name="alignment" onChange={this.handleChange}/><br/><br/>
                    <TextField style={TextFieldCssExtra} label="Politeness" placeholder="Politeness"
                               name="politeness" onChange={this.handleChange}/><br/><br/>
                    <TextField style={TextFieldCssExtra} label="Person state" placeholder="Person state"
                               name="personState" onChange={this.handleChange}/><br/><br/>
                <InputLabel htmlFor="honestly-simple"> Honestly:
                    <Select label = "honestly" name = "honestly"
                            value={this.state.honestly}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'honestly',
                                id: 'honestly-simple',
                            }}>
                        <MenuItem value={true}> Yes </MenuItem>
                        <MenuItem value={false}> No </MenuItem>
                    </Select>
                </InputLabel><br/>
                    <Button style={buttonStyle} variant="contained" color="primary" disabled={this.checkButton()}
                            onClick={this.handleSubmit}>Send</Button>
                </form>
            </div>

        );
    }
}


export default FormManagerExtra;