/*
package com.back.back.service;

import com.back.back.model.Purpose;
import com.back.back.repository.PurposeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PurposeService {
    @Autowired
    private PurposeRepository purposeRepository;

    public Purpose getPurposeById(Long id){
        if (log.isDebugEnabled()) {
            log.debug("Method named getPurposeById with id: " + id + "...");
        }
        return purposeRepository.getPurposeById(id);
    }

    public List<Purpose> getAllPurposes(){
        if (log.isDebugEnabled()) {
            log.debug("Method named getAllPurposes.");
        }
        return purposeRepository.findAll();
    }

}
*/