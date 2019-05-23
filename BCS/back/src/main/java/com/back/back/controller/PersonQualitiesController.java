package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonQualitiesController {

    private final static String newQuery = "SELECT *\n" +
            "FROM PERSON_QUALITIES";

    @RequestMapping(value = "/personQualities",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getPersonQualities() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
