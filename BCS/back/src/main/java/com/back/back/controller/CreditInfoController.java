package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CreditInfoController {

    private final static String newQuery = "SELECT *\n" +
            "FROM CREDIT_INFO";

    @RequestMapping(value = "/creditInfo",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getCreditInfo() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
