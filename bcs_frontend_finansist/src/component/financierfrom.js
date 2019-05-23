import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {SERVER_URL} from '../constans'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const labelStyle = {
    fontSize : "22px",
    align: "center",
    paddingLeft: "20px"

};
const labelStyleFinal = {
    fontSize : "22px",
    align: "center",
    paddingLeft: "20px"
};

const TableCssMLData = {
    background : "linear-gradient(45deg, #EECFBA, #C5DDE8)",
    border: "1px solid grey",
    width: "550px",
    height: "130px",
    position: "absolute",
    left: "30%",
    align: "center",
    paddingTop: "10px"

};

const TableCssMLFinalData = {
    background : "linear-gradient(45deg, #EECFBA, #C5DDE8)",
    border: "1px solid grey",
    width: "550px",
    height: "100px",
    position: "absolute",
    left: "30%",
    align: "center",
    paddingTop: "10px"

};

const MainForm = {
    background : "linear-gradient(to top left, #99ccff 0%, #ffff99 100%)",
    height: "900px",
    align: "center",
    paddingTop: "30px"
};

const MLDiv = {
    paddingTop: "430px"
};

const MLFinalDiv = {
    paddingTop: "200px"
};

const TableCssExtra = {
    background : "linear-gradient(45deg, #EECFBA, #C5DDE8)",
    border: "1px solid grey",
    width: "550px",
    height: "400px",
    position: "absolute",
    left: "30%",
    align: "center",
    paddingTop: "10px"

};


const TodoComponent = {
    fountSize : "22px",
    width: "300px",
    margin: "dense",
    autoFocus: true

};

class FinancierFrom extends Component{
    constructor(props){
        super(props);
        this.state = {personExtraId: 0, outfit: "Data is loading", alignment: "Data is loading", politeness: "Data is loading",
            honestly: "Data is loading", personState: "Data is loading", isLoadingExtraData:true, isLoadingMLData:true,
            telephoneId: "Data is loading", housingId: "Data is loading", purposeId: "Data is loading", creditInfoId: "Data is loading",
            propertyId: "Data is loading", personCreditInformationStatusId: "Data is loading",predictId : "Data is loading", creditHistoriesId: "Data is loading",
            otherInstallmentPlansId: "Data is loading", personInfoId: "Data is loading", qualityId: "Data is loading",
            sex: "Data is loading", personalStatus: "Data is loading", mainJob: "Data is loading", foreignWorker: "Data is loading", age: "Data is loading", otherInstallmentPlans: "Data is loading", housing: "Data is loading",
            telephone: "Data is loading", presentEmploymentSince: "Data is loading", property: "Data is loading", creditHistory: "Data is loading", savingAccount: "Data is loading", duration: "Data is loading",
            numberOfExistingCreditsAtThisBank: "Data is loading", maintenance: "Data is loading", statusOfExistingCheckingAccount: "Data is loading", creditAmount: "Data is loading",
            installmentRate: "Data is loading", otherDebtors: "Data is loading", purpose: "Data is loading", predict: "Data is loading", predictAnswer: "Data is loading",predictionFinal : null}
    }

    handleUpdateExtraData =  () => {
        fetch(SERVER_URL + '/outputDataExtra',
            {method: 'GET'})
            .then((response) => response.json())
            .then((responseData) =>{
                if(responseData.isLoadingExtraData == null){
                    if(this.state.personExtraId !== responseData.personExtraId) {
                        this.setState({
                            outfit: responseData.outfit,
                            alignment: responseData.alignment,
                            politeness: responseData.politeness,
                            honestly: responseData.honestly,
                            personState: responseData.personState,
                            personExtraId: responseData.personExtraId,
                            isLoadingExtraData: false
                        })
                    }
                }
                }
            )
            .catch(err => console.error(err))
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleUpdateMLData = () => {
        fetch(SERVER_URL + '/outputData',
            {method: 'GET'})
            .then((response) => response.json())
            .then((responseData) =>{
                if(responseData.isLoadingMLData == null){
                    if(this.state.personInfoId !== responseData.personInfoId) {
                        this.setState({
                            telephoneId: responseData.telephoneId,
                            housingId: responseData.housingId,
                            purposeId: responseData.purposeId,
                            creditInfoId: responseData.creditInfoId,
                            propertyId: responseData.propertyId,
                            personCreditInformationStatusId: responseData.personCreditInformationStatusId,
                            creditHistoriesId: responseData.creditHistoriesId,
                            otherInstallmentPlansId: responseData.otherInstallmentPlansId,
                            personInfoId: responseData.personInfoId,
                            qualityId: responseData.qualityId,
                            predictId: responseData.predictId,
                            presentResidenceSince: responseData.presentResidenceSince,
                            sex: responseData.sex,
                            personalStatus: responseData.personalStatus,
                            mainJob: responseData.mainJob,
                            foreignWorker: responseData.foreignWorker,
                            age: responseData.age,
                            otherInstallmentPlans: responseData.otherInstallmentPlans,
                            housing: responseData.housing,
                            telephone: responseData.telephone,
                            presentEmploymentSince: responseData.presentEmploymentSince,
                            property: responseData.property,
                            creditHistory: responseData.creditHistory,
                            savingAccount: responseData.savingAccount,
                            duration: responseData.duration,
                            numberOfExistingCreditsAtThisBank: responseData.numberOfExistingCreditsAtThisBank,
                            maintenance: responseData.maintenance,
                            statusOfExistingCheckingAccount: responseData.statusOfExistingCheckingAccount,
                            creditAmount: responseData.creditAmount,
                            installmentRate: responseData.installmentRate,
                            otherDebtors: responseData.otherDebtors,
                            purpose: responseData.purpose,
                            predict: responseData.predict,
                            isLoadingMLData: false
                        })
                    }
                    if(this.state.predict === "1"){
                        this.setState({predictAnswer: "Credit cannot be issued"})
                    }
                    else if(this.state.predict === "2"){
                        this.setState({predictAnswer: "Credit can be issued"})
                    }
                }
            });
    };
    handleUpdateFinalDecision = (event) => {
        event.preventDefault();
        let newFinalResult ={
            telephoneId: this.state.telephoneId,
            housingId: this.state.housingId,
            purposeId: this.state.purposeId,
            creditInfoId: this.state.creditInfoId,
            propertyId: this.state.propertyId,
            personCreditInformationStatusId: this.state.personCreditInformationStatusId,
            creditHistoriesId: this.state.creditHistoriesId,
            otherInstallmentPlansId: this.state.otherInstallmentPlansId,
            personInfoId: this.state.personInfoId,
            predictId: this.state.predictId,
            qualityId: this.state.qualityId,
            presentResidenceSince: this.state.presentResidenceSince,
            sex: this.state.sex,
            personalStatus: this.state.personalStatus,
            mainJob: this.state.mainJob,
            foreignWorker: this.state.foreignWorker,
            age: this.state.age,
            otherInstallmentPlans: this.state.otherInstallmentPlans,
            housing: this.state.housing,
            telephone: this.state.telephone,
            presentEmploymentSince: this.state.presentEmploymentSince,
            property: this.state.property,
            creditHistory: this.state.creditHistory,
            savingAccount: this.state.savingAccount,
            duration: this.state.duration,
            numberOfExistingCreditsAtThisBank: this.state.numberOfExistingCreditsAtThisBank,
            maintenance: this.state.maintenance,
            statusOfExistingCheckingAccount: this.state.statusOfExistingCheckingAccount,
            creditAmount: this.state.creditAmount,
            installmentRate: this.state.installmentRate,
            otherDebtors: this.state.otherDebtors,
            purpose: this.state.purpose,
            predict: this.state.predict,
            outfit: this.state.outfit,
            alignment: this.state.alignment,
            politeness: this.state.politeness,
            honestly: this.state.honestly,
            personState: this.state.personState};
        this.sendResult(newFinalResult);
    };

    sendResult = (finalResult) => {
        fetch(SERVER_URL + '/getFinalResult',
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalResult)
            })
            .then(function(finalResult) {
                console.log(finalResult);
            })
            .catch(err => console.error(err))
    };

    checkButton = () => {
        return !(this.state.isLoadingExtraData !== true &&
            this.state.isLoadingMLData !== true &&
            this.state.predictionFinal !== null)
    };

    render() {
        return(
            <div style={MainForm} className="App">
                <div>
                <label style={labelStyle}>Extra Information</label>
                <form style={TableCssExtra}>
                <TextField style={TodoComponent} label="Outfit" placeholder="Outfit"
                           name="outfit" value={this.state.outfit} disabled={true} onChange={this.handleChange}/><br/>
                <TextField style={TodoComponent} label="Alignment" placeholder="Alignment"
                           name="alignment" value={this.state.alignment} disabled={true} onChange={this.handleChange}/><br/><br/>
                <TextField style={TodoComponent} label="Politeness" placeholder="Politeness"
                           name="politeness" value={this.state.politeness} disabled={true} onChange={this.handleChange}/><br/><br/>
                <TextField style={TodoComponent} label="Honestly" placeholder="Honestly"
                           name="honestly" value={this.state.honestly} disabled={true} onChange={this.handleChange}/><br/><br/>
                <TextField style={TodoComponent} label="Person state" placeholder="Person state"
                           name="personState" value={this.state.personState} disabled={true} onChange={this.handleChange}/><br/><br/>
                <Button variant="outlined" color="primary"
                        onClick={this.handleUpdateExtraData}>Update</Button>
                </form>
                </div>
                <div style={MLDiv}>
                <label style={labelStyle}>ML Results</label>
                <form style={TableCssMLData}>
                    <TextField style={TodoComponent} label="ML Results" placeholder="ML Results"
                               name="predictAnswer" value={this.state.predictAnswer} disabled={true} onChange={this.handleChange}/><br/><br/>
                    <Button variant="outlined" color="primary"
                            onClick={this.handleUpdateMLData}>Update</Button>
                </form>
                </div>
                <div style={MLFinalDiv}>
                    <label style={labelStyleFinal}>Final Decision</label>
                    <form style={TableCssMLFinalData}>
                        <InputLabel htmlFor="predictionFinal-simple">Give person a credit?
                            <Select label = "predictionFinal" name = "predictionFinal"
                                    value={this.state.predictionFinal}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'predictionFinal',
                                        id: 'predictionFinal-simple',
                                    }}>
                                <MenuItem value={'1'}> No </MenuItem>
                                <MenuItem value={'2'}> Yes </MenuItem>
                            </Select>
                        </InputLabel><br/><br/>
                        <Button variant="contained" color="secondary" disabled={this.checkButton()}
                                onClick={this.handleUpdateFinalDecision}>Send</Button>
                    </form>
                </div>
            </div>
        );
    }

}

export default FinancierFrom;