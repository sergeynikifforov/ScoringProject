package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class GetMLJSONDataController {

    private static final String newQuery = "SELECT t1.SEX, t1.PERSONAL_STATUS, t1.MAIN_JOB,\n" +
            "t1.FOREIGN_WORKER, t1.PRESENT_EMPLOYMENT, t1.AGE,\n" +
            "t2.OTHER_INSTALLMENT_PLAN, \n" +
            "t3.TELEPHONE, \n" +
            "t4.HOUSING, t4.PRESENT_RESIDENCE,\n" +
            "t5.PROPERTY,\n" +
            "t6.SAVING_ACCOUNT,\n" +
            "t6.STATUS_OF_EXISTING_CHECKING_ACCOUNT,\n" +
            "t6.INSTALLMENT_RATE_IN_PERCENTAGE_OF_DISPOSABLE_INCOME,\n" +
            "t6.NUMBER_OF_CREDIT,\n" +
            "t8.CREDIT_HISTORY,\n" +
            "t9.DURATION,t9.CREDIT_AMOUNT,t9.OTHER_DEBTORS,\n" +
            "t9.NUMBER_OF_PEOPLE_BEING_LIABLE_TO_PROVIDE_MAINTENANCE_FOR,\n" +
            "t11.PURPOSE,t12.PREDICTION\n" +
            "FROM PERSON_INFO AS t1\n" +
            "INNER JOIN OTHER_INSTALLMENT_PLANS AS t2 ON t1.PERSON_INFO_ID = t2.PERSON_iNFO_ID \n" +
            "INNER JOIN TELEPHONE AS t3 ON t1.PERSON_INFO_ID = t3.PERSON_INFO_ID\n" +
            "INNER JOIN HOUSING AS t4 ON t1.PERSON_INFO_ID = t4.PERSON_INFO_ID\n" +
            "INNER JOIN PROPERTY AS t5 ON t1.PERSON_INFO_ID = t5.PERSON_INFO_ID\n" +
            "INNER JOIN PERSON_CREDIT_INFORMATION_STATUS AS t6 on t1.PERSON_CREDIT_INFORMATION_STATUS_id = t6.PERSON_CREDIT_INFORMATION_STATUS_id\n" +
            "INNER JOIN PC_AND_CH AS t7 on t6.PERSON_CREDIT_INFORMATION_STATUS_id = t7.PERSON_CREDIT_INFORMATION_STATUS_id\n" +
            "INNER JOIN CREDIT_HISTORY AS t8 on t7.CREDIT_HISTORY_ID = t8.CREDIT_HISTORY_ID\n" +
            "INNER JOIN CREDIT_INFO AS t9 on t1.PERSON_INFO_ID = t9.PERSON_INFO_ID\n" +
            "INNER JOIN C_AND_P AS t10 on t9.CREDIT_INFO_ID = t10.CREDIT_INFO_ID\n" +
            "INNER JOIN PURPOSE AS t11 on t10.PURPOSE_ID = t11.PURPOSE_ID\n" +
            "INNER JOIN PREDICT AS t12 on t1.PERSON_INFO_ID = t12.PERSON_INFO_ID";

    @RequestMapping(value = "/allDataJson",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getAllTable() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
