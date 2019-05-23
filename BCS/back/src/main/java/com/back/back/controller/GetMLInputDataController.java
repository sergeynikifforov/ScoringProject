package com.back.back.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class GetMLInputDataController {

    String data = "No data available";

    @RequestMapping(value = "/inputData",
            method = {RequestMethod.GET,RequestMethod.POST})
    public String ShowData(@RequestBody(required=false) String jsonString){
        if(jsonString != null) {
            this.data = jsonString;
        }
        return this.data;
    }
}
