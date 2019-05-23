import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {SERVER_URL} from '../Constants';
import './tableDBCss.css'




const tableCss = {
    background : "linear-gradient(to right, #F6EFD2, #CEAD78)",
    color: "#0000ff",
};

class DBForm extends Component{

    constructor(props){
        super(props);
        this.state = {data : []}
    }

    componentDidMount() {
        fetch(SERVER_URL + '/allDataJson')
            .then((response) => response.json())
            .then((responseData) => {
                let newResponseData;
                newResponseData = this.convertData(responseData);
                this.setState({data: newResponseData});
                })
            .catch(err => console.error(err))
    }

    convertData = (data) => {
        let i;
        for(i = 0; i < data.length; i++){
            // Personal Status
            if(data[i].personal_status === "A91"){
                data[i].personal_status =  "divorced/separated";
            }
            else if(data[i].personal_status === "A92"){
                data[i].personal_status =  "divorced/separated/married";
            }
            else if(data[i].personal_status === "A93"){
                data[i].personal_status =  "single";
            }
            else if(data[i].personal_status === "A94"){
                data[i].personal_status =  "married/widowed";
            }
            else if(data[i].personal_status === "A95"){
                data[i].personal_status =  "single";
            }

            // Main Job

            if(data[i].main_job === "A171"){
                data[i].main_job = "unemployed / unskilled - non-resident"
            }
            else if(data[i].main_job === "A172"){
                data[i].main_job = "unskilled - resident"
            }
            else if(data[i].main_job === "A173"){
                data[i].main_job = "skilled employee / official"
            }
            else if(data[i].main_job === "A174"){
                data[i].main_job = "management / self-employed / highly qualified employee / officer"
            }

            // Foreign Worker
            if(data[i].foreign_worker === "A201"){
                data[i].foreign_worker = "yes"
            }
            else if(data[i].foreign_worker === "A202"){
                data[i].foreign_worker = "no"
            }

            // Present Employment
            if(data[i].present_employment === "A71"){
                data[i].present_employment = "unemployed"
            }
            else if(data[i].present_employment === "A72"){
                data[i].present_employment = "...< 1 year"
            }
            else if(data[i].present_employment === "A73"){
                data[i].present_employment = "1 <=...< 4 years"
            }
            else if(data[i].present_employment === "A74"){
                data[i].present_employment = "4 <=...< 7 years"
            }
            else if(data[i].present_employment === "A75"){
                data[i].present_employment = "...>= 7 years"
            }

            // Other Installment Plans
            if(data[i].other_installment_plan === "A141"){
                data[i].other_installment_plan = "bank"
            }
            else if(data[i].other_installment_plan === "A142"){
                data[i].other_installment_plan = "stores"
            }
            else if(data[i].other_installment_plan === "A143"){
                data[i].other_installment_plan = "none"
            }

            // Telephone
            if(data[i].telephone === "A191"){
                data[i].telephone = "none"
            }
            else if(data[i].telephone === "A192"){
                data[i].telephone = "yes, registered under the customers name"
            }

            // Housing
            if(data[i].housing === "A151"){
                data[i].housing = "rent"
            }
            else if(data[i].housing === "A152"){
                data[i].housing = "own"
            }
            else if(data[i].housing === "A153"){
                data[i].housing = "for free"
            }

            // Property
            if(data[i].property === "A121"){
                data[i].property = "real estate"
            }
            else if(data[i].property === "A122"){
                data[i].property = "building society savings agreement / life insurance"
            }
            else if(data[i].property === "A123"){
                data[i].property = "car or other"
            }
            else if(data[i].property === "A124"){
                data[i].property = "unknown / no property"
            }

            // Saving Account
            if(data[i].saving_account === "A61"){
                data[i].saving_account = "...< 100 DM"
            }
            else if(data[i].saving_account === "A62"){
                data[i].saving_account = "100 <=...< 500 DM"
            }
            else if(data[i].saving_account === "A63"){
                data[i].saving_account = "500 <=...< 1000 DM"
            }
            else if(data[i].saving_account === "A64"){
                data[i].saving_account = "...>= 1000 DM"
            }
            else if(data[i].saving_account === "A65"){
                data[i].saving_account = "unknown/ no savings account"
            }

            // Status of Existing Checking Account
            if(data[i].status_of_existing_checking_account === "A11"){
                data[i].status_of_existing_checking_account = "...< 0 DM"
            }
            else if(data[i].status_of_existing_checking_account === "A12"){
                data[i].status_of_existing_checking_account = "0 <=...< 200 DM"
            }
            else if(data[i].status_of_existing_checking_account === "A13"){
                data[i].status_of_existing_checking_account = "...>= 200 DM / salary assignments for at least 1 year"
            }
            else if(data[i].status_of_existing_checking_account === "A14"){
                data[i].status_of_existing_checking_account = "no checking account"
            }
            // Credit History
            if(data[i].credit_history === "A30"){
                data[i].credit_history = "no credits taken / all credits paid back duly"
            }
            else if(data[i].credit_history === "A31"){
                data[i].credit_history = "all credits at this bank paid back duly"
            }
            else if(data[i].credit_history === "A32"){
                data[i].credit_history = "existing credits paid back duly till now"
            }
            else if(data[i].credit_history === "A33"){
                data[i].credit_history = "delay in paying off in the past"
            }
            else if(data[i].credit_history === "A34"){
                data[i].credit_history = "critical account / other credits existing (not at this bank)"
            }

            // Other Debtors
            if(data[i].other_debtors === "A101"){
                data[i].other_debtors = "none"
            }
            else if(data[i].other_debtors === "A102"){
                data[i].other_debtors = "co-applicant"
            }
            else if(data[i].other_debtors === "A103"){
                data[i].other_debtors = "guarantor"
            }

            // Purpose
            if(data[i].purpose === "A40"){
                data[i].purpose = "car (new)"
            }
            else if(data[i].purpose === "A41"){
                data[i].purpose = "car (used)"
            }
            else if(data[i].purpose === "A42"){
                data[i].purpose = "furniture/equipment"
            }
            else if(data[i].purpose === "A43"){
                data[i].purpose = "radio/television"
            }
            else if(data[i].purpose === "A44"){
                data[i].purpose = "domestic appliances"
            }
            else if(data[i].purpose === "A45"){
                data[i].purpose = "repairs"
            }
            else if(data[i].purpose === "A46"){
                data[i].purpose = "education"
            }
            else if(data[i].purpose === "A47"){
                data[i].purpose = "vacation"
            }
            else if(data[i].purpose === "A48"){
                data[i].purpose = "retraining"
            }
            else if(data[i].purpose === "A49"){
                data[i].purpose = "business"
            }
            else if(data[i].purpose === "A410"){
                data[i].purpose = "others"
            }

        }
        return data;
    };


    render() {
        const columns = [{
            Header: 'Sex', // Header of the column
            accessor: 'sex' // Value accessor
        }, {
            Header: 'Personal Status',
            accessor: 'personal_status',
        }, {
            Header: 'Main Job',
            accessor: 'main_job',
        }, {
            Header: 'Foreign Worker',
            accessor: 'foreign_worker',
        }, {
            Header: 'Present Employment Since',
            accessor: 'present_employment',
        }, {
            Header: 'Age',
            accessor: 'age',
        }, {
            Header: 'Other Installment Plans',
            accessor: 'other_installment_plan',
        }, {
            Header: 'Telephone',
            accessor: 'telephone',
        }, {
            Header: 'Housing',
            accessor: 'housing',
        }, {
            Header: 'Present Residence Since',
            accessor: 'present_residence',
        }, {
            Header: 'Property',
            accessor: 'property',
        }, {
            Header: 'Saving account',
            accessor: 'saving_account',
        }, {
            Header: 'Status of Existing Checking Account',
            accessor: 'status_of_existing_checking_account',
        }, {
            Header: 'Installment Rate in Percentage of Disposable Income',
            accessor: 'installment_rate_in_percentage_of_disposable_income',
        }, {
            Header: 'Number of Credit',
            accessor: 'number_of_credit',
        }, {
            Header: 'Credit History',
            accessor: 'credit_history',
        }, {
            Header: 'Duration',
            accessor: 'duration',
        }, {
            Header: 'Credit Amount',
            accessor: 'credit_amount',
        }, {
            Header: 'Other Debtors',
            accessor: 'other_debtors',
        }, {
            Header: 'Number of People Being Liable to Provide Maintenance For',
            accessor: 'number_of_people_being_liable_to_provide_maintenance_for',
        }, {
            Header: 'Purpose',
            accessor: 'purpose',
        }, {
            Header: 'Prediction',
            accessor: 'prediction',
        }
        ];
        return(
            <div>
                <ReactTable
                    className= "ReactTable"
                    style={tableCss}
                    data={this.state.data}
                    columns={columns}
                    resizable={true}
                    filterable={true}
                />
            </div>
        );
    }
}

export default DBForm;