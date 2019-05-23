package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PropertyController {

    private final static String newQuery = "SELECT *\n" +
            "FROM PROPERTY";

    @RequestMapping(value = "/property",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getProperty() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
