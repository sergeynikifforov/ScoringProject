package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonCreditInformationStatusController {

    private final static String newQuery = "SELECT *\n" +
            "FROM PERSON_CREDIT_INFORMATION_STATUS";

    @RequestMapping(value = "/personCreditInformationStatus",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getPersonCreditInformationStatus() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
