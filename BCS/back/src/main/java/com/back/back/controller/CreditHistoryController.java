package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CreditHistoryController {

    private final static String newQuery = "SELECT *\n" +
            "FROM CREDIT_HISTORY";

    @RequestMapping(value = "/creditHistories",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getCreditHistories() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}

