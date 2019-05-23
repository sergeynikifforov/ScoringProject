package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PersonInfoController {

    private final static String newQuery = "SELECT *\n" +
            "FROM PERSON_INFO";

    @RequestMapping(value = "/personInfo",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getPersonInfo() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
