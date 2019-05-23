package com.back.back.repository;

import com.back.back.model.PersonInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PersonInfoRepository extends JpaRepository<PersonInfo, Long> {

}
