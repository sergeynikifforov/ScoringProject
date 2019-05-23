package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.*;

@RestController
public class TelephoneController {

    private final static String newQuery = "SELECT *\n" +
            "FROM TELEPHONE";

    @RequestMapping(value = "/telephone",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getTelephone() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
