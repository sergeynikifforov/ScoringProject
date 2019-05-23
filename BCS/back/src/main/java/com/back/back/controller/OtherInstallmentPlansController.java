package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OtherInstallmentPlansController {

    private final static String newQuery = "SELECT *\n" +
            "FROM OTHER_INSTALLMENT_PLANS";

    @RequestMapping(value = "/otherInstallmentPlans",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getOtherInstallmentPlans() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
