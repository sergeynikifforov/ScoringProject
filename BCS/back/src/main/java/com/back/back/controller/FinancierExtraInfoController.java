package com.back.back.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FinancierExtraInfoController {
    String data = "{\"isLoadingExtraData\" :"  + "\"No data available\"" + "}";

    @RequestMapping(value = "/outputDataExtra",
            method = {RequestMethod.GET,RequestMethod.POST})
    public String ShowDataExtra(@RequestBody(required=false) String jsonString){
        if(jsonString != null) {
            this.data = jsonString;
        }
        return this.data;
    }
}
