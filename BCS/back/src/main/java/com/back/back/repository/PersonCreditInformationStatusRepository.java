package com.back.back.repository;

import com.back.back.model.PersonCreditInformationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource
public interface PersonCreditInformationStatusRepository extends JpaRepository<PersonCreditInformationStatus, Long> {

}