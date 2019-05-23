import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {SERVER_URL} from '../constants.js';


const labelStyle = {
    fontSize : "22px",
    align: "center",
    paddingLeft: "30px"
};

const btnTest = {
    marginLeft : "20px"
};

const btnSave = {
    marginRight : "20px"
};

const MainBackground = {
    background: "linear-gradient(to right, #F6EFD2, #CEAD78)",
    height: "1000px",
    align: "center",
    paddingTop: "30px"
};

const TableCss = {
    background : "linear-gradient(45deg, #EECFBA, #C5DDE8)",
    border: "1px solid grey",
    width: "550px",
    position: "absolute",
    height : "900px",
    left: "30%",
    align: "center",
    padding: "10px"

};

const TextFieldCss = {
    fontWeight: "bold",
    width: "180px",
};


const TodoComponent = {
    fountSize : "22px",
    margin: "dense",
    autoFocus: true

};



class FormManager extends Component{

    constructor(props){
        super(props);
        this.state ={presentResidenceSince: '', sex: '', personalStatus: '',
            mainJob:  '', foreignWorker: '', age: '', otherInstallmentPlans: '',
            housing: '', telephone:'', presentEmploymentSince: '', property: '',
            creditHistory: '', savingAccount: '', duration: '',
            numberOfExistingCreditsAtThisBank: '',maintenance: '',
            statusOfExistingCheckingAccount: '',creditAmount: '',
            installmentRate: '',otherDebtors:'',purpose:'',disabledExtraSend: true}
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    checkButton = () => {
        return !(this.state.presentResidenceSince !== '' &&
            this.state.sex !== '' &&
            this.state.personalStatus !== '' &&
            this.state.mainJob !== '' &&
            this.state.foreignWorker !== '' &&
            this.state.otherInstallmentPlans !== '' &&
            this.state.housing !== '' &&
            this.state.telephone !== '' &&
            this.state.presentEmploymentSince !== '' &&
            this.state.property !== '' &&
            this.state.creditHistory !== '' &&
            this.state.savingAccount !== '' &&
            this.state.duration !== '' &&
            this.state.numberOfExistingCreditsAtThisBank !== '' &&
            this.state.maintenance !== '' &&
            this.state.statusOfExistingCheckingAccount !== '' &&
            this.state.creditAmount !== '' &&
            this.state.installmentRate !== '' &&
            this.state.otherDebtors !== '' &&
            this.state.purpose !== '');
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let newManager = {presentResidenceSince: this.state.presentResidenceSince, sex: this.state.sex, personalStatus: this.state.personalStatus,
            mainJob:  this.state.mainJob, foreignWorker: this.state.foreignWorker, age: this.state.age, otherInstallmentPlans: this.state.otherInstallmentPlans,
            housing: this.state.housing, telephone:this.state.telephone, presentEmploymentSince: this.state.presentEmploymentSince, property: this.state.property,
            creditHistory: this.state.creditHistory, savingAccount: this.state.savingAccount, duration: this.state.duration,
            numberOfExistingCreditsAtThisBank: this.state.numberOfExistingCreditsAtThisBank,maintenance: this.state.maintenance,
            statusOfExistingCheckingAccount: this.state.statusOfExistingCheckingAccount,creditAmount: this.state.creditAmount,
            installmentRate: this.state.installmentRate,otherDebtors:this.state.otherDebtors,purpose:this.state.purpose};
        // alert(JSON.stringify(newManager));
        this.addManagerData(newManager);
    };

    addManagerData = (manager) => {
        fetch(SERVER_URL + '/inputData',
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

    handleTestUpdate = () => {
        this.setState({presentResidenceSince: 1, sex: 'M', personalStatus: 'A91',
            mainJob:  'A171', foreignWorker: 'A201', age: 12, otherInstallmentPlans: 'A141',
            housing: 'A151', telephone:'A192', presentEmploymentSince: 'A71', property: 'A121',
            creditHistory: 'A30', savingAccount: 'A61', duration: 14,
            numberOfExistingCreditsAtThisBank: 12 ,maintenance: 12,
            statusOfExistingCheckingAccount: 'A11',creditAmount: 12000,
            installmentRate: 4 ,otherDebtors:'A101',purpose:'A44'})
    };


    render() {
        return(
        <div style={MainBackground} className="App">
            <label style={labelStyle}>Main Information</label>
            <form style={TableCss}>
                <InputLabel  htmlFor="sex-simple">Sex:
                <Select style={TodoComponent} label = "Sex" name = "Sex"
                        value={this.state.sex}
                    onChange={this.handleChange}
                        inputProps={{
                            name: 'sex',
                            id: 'sex-simple',
                        }}>
                    <MenuItem value={'F'}>Male</MenuItem>
                    <MenuItem value={'M'}>Female</MenuItem>
                </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="Personal Status-simple">Personal Status:
                    <Select label = "personalStatus" name = "personalStatus"
                            value={this.state.personalStatus}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'personalStatus',
                                id: 'Personal Status-simple',
                            }}>
                        <MenuItem value={'A91'}>divorced/separated(Male)</MenuItem>
                        <MenuItem value={'A92'}>divorced/separated/married(Female)</MenuItem>
                        <MenuItem value={'A93'}>Single(Male)</MenuItem>
                        <MenuItem value={'A94'}>married/widowed(Male)</MenuItem>
                        <MenuItem value={'A95'}>single(Female)</MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="mainJob-simple">Main job:
                    <Select label = "mainJob" name = "mainJob"
                            value={this.state.mainJob}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'mainJob',
                                id: 'mainJob-simple',
                            }}>
                        <MenuItem value={'A171'}>unemployed / unskilled - non-resident</MenuItem>
                        <MenuItem value={'A172'}>unskilled - resident</MenuItem>
                        <MenuItem value={'A173'}>skilled employee / official</MenuItem>
                        <MenuItem value={'A174'}>management / self-employed /
                            highly qualified employee / officer
                        </MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="foreignWorker-simple">Foreign Worker:
                    <Select label = "foreignWorker" name = "foreignWorker"
                            value={this.state.foreignWorker}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'foreignWorker',
                                id: 'foreignWorker-simple',
                            }}>
                        <MenuItem value={'A201'}>Yes</MenuItem>
                        <MenuItem value={'A202'}>No</MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="otherInstallmentPlans-simple">Other installment plans:
                    <Select label = "otherInstallmentPlans" name = "otherInstallmentPlans"
                            value={this.state.otherInstallmentPlans}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'otherInstallmentPlans',
                                id: 'otherInstallmentPlans-simple',
                            }}>
                        <MenuItem value={'A141'}>Bank</MenuItem>
                        <MenuItem value={'A142'}>Stores</MenuItem>
                        <MenuItem value={'A143'}>None</MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="housing-simple">Housing:
                    <Select label = "housing" name = "housing"
                            value={this.state.housing}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'housing',
                                id: 'housing-simple',
                            }}>
                        <MenuItem value={'A151'}>Rent</MenuItem>
                        <MenuItem value={'A152'}>Own</MenuItem>
                        <MenuItem value={'A153'}>For free</MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="telephone-simple">Telephone:
                    <Select label = "telephone" name = "telephone"
                            value={this.state.telephone}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'telephone',
                                id: 'telephone-simple',
                            }}>
                        <MenuItem value={'A191'}>None</MenuItem>
                        <MenuItem value={'A192'}>Yes, registered under the customers name</MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="presentEmploymentSince-simple">Present Employment Since:
                    <Select label = "presentEmploymentSince" name = "presentEmploymentSince"
                            value={this.state.presentEmploymentSince}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'presentEmploymentSince',
                                id: 'presentEmploymentSince-simple',
                            }}>
                        <MenuItem value={'A71'}> unemployed </MenuItem>
                        <MenuItem value={'A72'}> ... &lt; 1 year </MenuItem>
                        <MenuItem value={'A73'}>1  &lt; = ... &lt; 4 years  </MenuItem>
                        <MenuItem value={'A74'}>4  &lt; = ... &lt; 7 years </MenuItem>
                        <MenuItem value={'A75'}> ... > = 7 years</MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="property-simple">Property:
                    <Select label = "property" name = "property"
                            value={this.state.property}
                            onChange={this.handleChange}

                            inputProps={{
                                name: 'property',
                                id: 'property-simple',
                            }}>
                        <MenuItem value={'A121'}> real estate </MenuItem>
                        <MenuItem value={'A122'}> building society savings agreement/
                            life insurance
                        </MenuItem>
                        <MenuItem value={'A123'}> car or other </MenuItem>
                        <MenuItem value={'A124'}> unknown / no property </MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="creditHistory-simple">Credit History:
                    <Select label = "creditHistory" name = "creditHistory"
                            value={this.state.creditHistory}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'creditHistory',
                                id: 'creditHistory-simple',
                            }}>
                        <MenuItem value={'A30'}> No credits taken /
                            all credits paid back duly
                        </MenuItem>
                        <MenuItem value={'A31'}> All credits at this bank paid back duly
                        </MenuItem>
                        <MenuItem value={'A32'}> Existing credits paid back duly till now </MenuItem>
                        <MenuItem value={'A33'}> Delay in paying off in the past </MenuItem>
                        <MenuItem value={'A34'}> Critical account /
                            other credits existing (not at this bank)
                        </MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="savingAccount-simple">Saving Account:
                    <Select label = "savingAccount" name = "savingAccount"
                            value={this.state.savingAccount}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'savingAccount',
                                id: 'savingAccount-simple',
                            }}>
                        <MenuItem value={'A61'}> ... &lt;  100 DM </MenuItem>
                        <MenuItem value={'A62'}> 100 &lt;= ... &lt;  500 DM </MenuItem>
                        <MenuItem value={'A63'}> 500 &lt;= ... &lt;  1000 DM </MenuItem>
                        <MenuItem value={'A64'}> ... >= 1000 DM </MenuItem>
                        <MenuItem value={'A65'}> unknown/ no savings account </MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="statusOfExistingCheckingAccount-simple">Status of existing checking account:
                    <Select label = "statusOfExistingCheckingAccount" name = "statusOfExistingCheckingAccount"
                            value={this.state.statusOfExistingCheckingAccount}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'statusOfExistingCheckingAccount',
                                id: 'statusOfExistingCheckingAccount-simple',
                            }}>
                        <MenuItem value={'A11'}> ... &lt; 0 DM </MenuItem>
                        <MenuItem value={'A12'}> 0 &lt;= ... &lt; 200 DM </MenuItem>
                        <MenuItem value={'A13'}> ... >= 200 DM / salary assignments for at least 1 year </MenuItem>
                        <MenuItem value={'A14'}> no checking account </MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="otherDebtors-simple">Other debtors/ guarantors:
                    <Select label = "otherDebtors" name = "otherDebtors"
                            value={this.state.otherDebtors}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'otherDebtors',
                                id: 'otherDebtors-simple',
                            }}>
                        <MenuItem value={'A101'}> None </MenuItem>
                        <MenuItem value={'A102'}> Co-applicant </MenuItem>
                        <MenuItem value={'A103'}> Guarantor </MenuItem>
                    </Select>
                </InputLabel><br/>
                <InputLabel htmlFor="purpose-simple">Purpose:
                    <Select label = "purpose" name = "purpose"
                            value={this.state.purpose}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'purpose',
                                id: 'purpose-simple',
                            }}>
                        <MenuItem value={'A40'}> Car (new) </MenuItem>
                        <MenuItem value={'A41'}> Car (used) </MenuItem>
                        <MenuItem value={'A42'}> Furniture/equipment </MenuItem>
                        <MenuItem value={'A43'}> Radio/television </MenuItem>
                        <MenuItem value={'A44'}> Domestic appliances </MenuItem>
                        <MenuItem value={'A45'}> Repairs </MenuItem>
                        <MenuItem value={'A46'}> Education </MenuItem>
                        <MenuItem value={'A47'}> Vacation </MenuItem>
                        <MenuItem value={'A48'}> Retraining </MenuItem>
                        <MenuItem value={'A49'}> Business </MenuItem>
                        <MenuItem value={'A410'}> Others </MenuItem>
                    </Select>
                </InputLabel><br/>
                <TextField style={TextFieldCss} label="Age" placeholder="Age"
                           name="age" type="number" value={this.state.age} onChange={this.handleChange}/><br/>
                <TextField style={TextFieldCss} label="Present residence since" placeholder="Present residence since"
                           name="presentResidenceSince" value={this.state.presentResidenceSince} type="number"  onChange={this.handleChange}/><br/>
                <TextField style={TextFieldCss} label="Credit duration in month" placeholder="Credit duration in month"
                           name="duration" type="number" value={this.state.duration} onChange={this.handleChange}/><br/>
                <TextField style={TextFieldCss} label="Number of existing credits" placeholder="Number of existing credits"
                           name="numberOfExistingCreditsAtThisBank" value={this.state.numberOfExistingCreditsAtThisBank} type="number" onChange={this.handleChange}/><br/><br/>
                <TextField style={TextFieldCss} label="Maintenance(value)" placeholder="maintenance(value)"
                           name="maintenance" type="number" value={this.state.maintenance} onChange={this.handleChange}/><br/><br/>
                <TextField style={TextFieldCss} label="Credit amount" placeholder="Credit amount"
                           name="creditAmount" type="number" value={this.state.creditAmount} onChange={this.handleChange}/><br/><br/>
                <TextField style={TextFieldCss} label="Installment rate in %" placeholder="Installment rate in %"
                           name="installmentRate" type="number" value={this.state.installmentRate} onChange={this.handleChange}/><br/><br/>
                <Button style={btnSave} variant="contained" color="primary" disabled={this.checkButton()}
                        onClick={this.handleSubmit}>Send</Button>
                <Button style={btnTest} variant="contained" color="primary"
                        onClick={this.handleTestUpdate}>Test</Button>
            </form>
        </div>
        );
    }
}

export default FormManager;

