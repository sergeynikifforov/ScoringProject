package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PredictController {

    private final static String newQuery = "SELECT *\n" +
            "FROM PREDICT";

    @RequestMapping(value = "/predict",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getPredict() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
