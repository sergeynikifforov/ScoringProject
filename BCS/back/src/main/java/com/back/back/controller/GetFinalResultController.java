package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static com.back.back.additionalfunc.ConnectionToDB.addToDB;


@RestController
public class GetFinalResultController{

    private String data = "No data available";

    @RequestMapping(value = "/getFinalResult",
            method = {RequestMethod.GET,RequestMethod.POST})
    public String ShowFinalResult(@RequestBody(required=false) String jsonString){
        if(jsonString != null) {
            this.data = jsonString;
            // need to parse here
            java.lang.reflect.Type mapType = new TypeToken<Map<String, Object>>() {
            }.getType();
            Gson gson = new Gson();
            Map<String, Object> categoryIcons = gson.fromJson(jsonString, mapType);

            // PURPOSE
            final String newQueryPurpose = String.format("INSERT INTO PURPOSE VALUES(%s,\'%s\')", categoryIcons.get("purposeId"), categoryIcons.get("purpose"));
            final String newQueryGetPurposeId = String.format("SELECT PURPOSE.PURPOSE_ID FROM PURPOSE WHERE PURPOSE_ID = %s", categoryIcons.get("purposeId"));
            final String newResultGetPurposeId = ConnectionToDB.connectToDB(newQueryGetPurposeId);
            addToDB(newQueryPurpose, newResultGetPurposeId);

            // PERSON_QUALITIES
            final String newQueryPersonQualities = String.format("INSERT INTO PERSON_QUALITIES VALUES(%s,\'%s\',\'%s\',\'%s\',%s,\'%s\')", categoryIcons.get("qualityId"), categoryIcons.get("outfit"), categoryIcons.get("alignment"), categoryIcons.get("politeness"), categoryIcons.get("honestly"), categoryIcons.get("personState"));
            final String newQueryGetPersonQualitiesId = String.format("SELECT PERSON_QUALITIES.PERSON_QUALITIES_ID FROM PERSON_QUALITIES WHERE PERSON_QUALITIES_ID = %s", categoryIcons.get("qualityId"));
            final String newResultGetPersonQualitiesId = ConnectionToDB.connectToDB(newQueryGetPersonQualitiesId);
            addToDB(newQueryPersonQualities, newResultGetPersonQualitiesId);

            // CREDIT_HISTORY
            final String newQueryCreditHistory = String.format("INSERT INTO CREDIT_HISTORY VALUES(%s,\'%s\')", categoryIcons.get("creditHistoriesId"), categoryIcons.get("creditHistory"));
            final String newQueryGetCreditHistoryId = String.format("SELECT CREDIT_HISTORY.CREDIT_HISTORY_ID FROM CREDIT_HISTORY WHERE CREDIT_HISTORY_ID = %s", categoryIcons.get("creditHistoriesId"));
            final String newResultGetCreditHistoryId = ConnectionToDB.connectToDB(newQueryGetCreditHistoryId);
            addToDB(newQueryCreditHistory, newResultGetCreditHistoryId);

            // PERSON_CREDIT_INFORMATION_STATUS
            final String newQueryPersonCreditInformationStatus = String.format("INSERT INTO PERSON_CREDIT_INFORMATION_STATUS VALUES(%s,\'%s\',\'%s\',%s,%s)", categoryIcons.get("personCreditInformationStatusId"), categoryIcons.get("savingAccount"),categoryIcons.get("statusOfExistingCheckingAccount"),categoryIcons.get("installmentRate"),categoryIcons.get("numberOfExistingCreditsAtThisBank"));
            final String newQueryGetPersonCreditInformationStatusId = String.format("SELECT PERSON_CREDIT_INFORMATION_STATUS.PERSON_CREDIT_INFORMATION_STATUS_ID FROM PERSON_CREDIT_INFORMATION_STATUS WHERE PERSON_CREDIT_INFORMATION_STATUS_ID = %s", categoryIcons.get("personCreditInformationStatusId")); //,categoryIcons.get("purposeId"));
            final String newResultGetPersonCreditInformationStatusId = ConnectionToDB.connectToDB(newQueryGetPersonCreditInformationStatusId);
            addToDB(newQueryPersonCreditInformationStatus, newResultGetPersonCreditInformationStatusId);

            // PERSON_INFO
            final String newQueryPersonInfo = String.format("INSERT INTO PERSON_INFO VALUES(%s,\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',%s,%s,%s)", categoryIcons.get("personInfoId"), categoryIcons.get("sex"),categoryIcons.get("personalStatus"),categoryIcons.get("mainJob"),categoryIcons.get("foreignWorker"),categoryIcons.get("presentEmploymentSince"),categoryIcons.get("age"),categoryIcons.get("personCreditInformationStatusId"),categoryIcons.get("qualityId"));
            final String newQueryGetPersonInfoId = String.format("SELECT PERSON_INFO.PERSON_INFO_ID FROM PERSON_INFO WHERE PERSON_INFO_ID = %s", categoryIcons.get("personInfoId"));
            final String newResultGetPersonInfoId = ConnectionToDB.connectToDB(newQueryGetPersonInfoId);
            addToDB(newQueryPersonInfo, newResultGetPersonInfoId);

            // PREDICT
            final String newQueryPredict = String.format("INSERT INTO PREDICT VALUES(%s,\'%s\',%s)", categoryIcons.get("telephoneId"), categoryIcons.get("predict"),categoryIcons.get("personInfoId"));
            final String newQueryGetPredictId = String.format("SELECT PREDICT.PREDICT_ID FROM PREDICT WHERE PREDICT_ID = %s", categoryIcons.get("predictId"));
            final String newResultGetPredictId = ConnectionToDB.connectToDB(newQueryGetPredictId);
            addToDB(newQueryPredict, newResultGetPredictId);

            // TELEPHONE
            final String newQueryTelephone = String.format("INSERT INTO TELEPHONE VALUES(%s,\'%s\',%s)", categoryIcons.get("telephoneId"), categoryIcons.get("telephone"),categoryIcons.get("personInfoId"));
            final String newQueryGetTelephoneId = String.format("SELECT TELEPHONE.TELEPHONE_ID FROM TELEPHONE WHERE TELEPHONE_ID = %s", categoryIcons.get("telephoneId"));
            final String newResultGetTelephoneId = ConnectionToDB.connectToDB(newQueryGetTelephoneId);
            addToDB(newQueryTelephone, newResultGetTelephoneId);

            // PROPERTY
            final String newQueryProperty = String.format("INSERT INTO PROPERTY VALUES(%s,\'%s\',%s)", categoryIcons.get("propertyId"), categoryIcons.get("property"),categoryIcons.get("personInfoId"));
            final String newQueryGetPropertyId = String.format("SELECT PROPERTY.PROPERTY_ID FROM PROPERTY WHERE PROPERTY_ID = %s", categoryIcons.get("propertyId"));
            final String newResultGetPropertyId = ConnectionToDB.connectToDB(newQueryGetPropertyId);
            addToDB(newQueryProperty, newResultGetPropertyId);

            // HOUSING
            final String newQueryHousing = String.format("INSERT INTO HOUSING VALUES(%s,\'%s\',%s,%s)", categoryIcons.get("housingId"), categoryIcons.get("housing"),categoryIcons.get("presentResidenceSince"),categoryIcons.get("personInfoId"));
            final String newQueryGetHousingId = String.format("SELECT HOUSING.HOUSING_ID FROM HOUSING WHERE HOUSING_ID = %s", categoryIcons.get("housingId"));
            final String newResultGetHousingId = ConnectionToDB.connectToDB(newQueryGetHousingId);
            addToDB(newQueryHousing, newResultGetHousingId);

            // OTHER_INSTALLMENT_PLANS
            final String newQueryOtherInstallmentPlans = String.format("INSERT INTO OTHER_INSTALLMENT_PLANS VALUES(%s,\'%s\',%s)", categoryIcons.get("otherInstallmentPlansId"),categoryIcons.get("otherInstallmentPlans"),categoryIcons.get("personInfoId"));
            final String newQueryGetOtherInstallmentPlansId = String.format("SELECT OTHER_INSTALLMENT_PLANS.OTHER_INSTALLMENT_PLANS_ID FROM OTHER_INSTALLMENT_PLANS WHERE OTHER_INSTALLMENT_PLANS_ID = %s", categoryIcons.get("otherInstallmentPlansId"));
            final String newResultGetOtherInstallmentPlansId = ConnectionToDB.connectToDB(newQueryGetOtherInstallmentPlansId);
            addToDB(newQueryOtherInstallmentPlans, newResultGetOtherInstallmentPlansId);


            // PC_AND_CH
            final String newQueryPCAndCH = String.format("INSERT INTO PC_AND_CH VALUES(%s,%s)", categoryIcons.get("personCreditInformationStatusId"),categoryIcons.get("creditHistoriesId"));
            final String newQueryGetPCAndCHId = String.format("SELECT PC_AND_CH.PERSON_CREDIT_INFORMATION_STATUS_ID, PC_AND_CH.CREDIT_HISTORY_ID FROM PC_AND_CH WHERE PC_AND_CH.PERSON_CREDIT_INFORMATION_STATUS_ID = %s AND PC_AND_CH.CREDIT_HISTORY_ID = %s", categoryIcons.get("personCreditInformationStatusId"),categoryIcons.get("creditHistoriesId"));
            final String newResultGetPCAndCHId = ConnectionToDB.connectToDB(newQueryGetPCAndCHId);
            addToDB(newQueryPCAndCH, newResultGetPCAndCHId);

            // CREDIT_INFO
            final String newQueryCreditInfo = String.format("INSERT INTO CREDIT_INFO VALUES(%s,%s,%s,\'%s\',%s,%s)", categoryIcons.get("creditInfoId"),categoryIcons.get("duration"),categoryIcons.get("creditAmount"),categoryIcons.get("otherDebtors"),categoryIcons.get("maintenance"),categoryIcons.get("personInfoId"));
            final String newQueryGetCreditInfoId = String.format("SELECT CREDIT_INFO.CREDIT_INFO_ID FROM CREDIT_INFO WHERE CREDIT_INFO.CREDIT_INFO_ID = %s", categoryIcons.get("creditInfoId"));
            final String newResultGetCreditInfoId = ConnectionToDB.connectToDB(newQueryGetCreditInfoId);
            addToDB(newQueryCreditInfo, newResultGetCreditInfoId);

            //C_AND_P
            final String newQueryCAndP = String.format("INSERT INTO C_AND_P VALUES(%s,%s)", categoryIcons.get("creditInfoId"),categoryIcons.get("purposeId"));
            final String newQueryGetCAndPId = String.format("SELECT C_AND_P.CREDIT_INFO_ID, C_AND_P.PURPOSE_ID FROM C_AND_P WHERE C_AND_P.CREDIT_INFO_ID = %s AND C_AND_P.PURPOSE_ID = %s", categoryIcons.get("creditInfoId"),categoryIcons.get("purposeId"));
            final String newResultGetCAndPId = ConnectionToDB.connectToDB(newQueryGetCAndPId);
            addToDB(newQueryCAndP, newResultGetCAndPId);

        }
        return this.data;
    }
}
