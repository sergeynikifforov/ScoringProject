package com.back.back.controller;

import com.back.back.additionalfunc.ConnectionToDB;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HousingController {
    private final static String newQuery = "SELECT *\n" +
            "FROM HOUSING";

    @RequestMapping(value = "/housing",
            method = {RequestMethod.POST, RequestMethod.GET},
            produces = {"application/json"})
    public String getHousing() {
        return ConnectionToDB.connectToDB(newQuery);
    }
}
