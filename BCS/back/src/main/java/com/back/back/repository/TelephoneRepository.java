package com.back.back.repository;

import com.back.back.model.Telephone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface TelephoneRepository extends JpaRepository<Telephone, Long> {

}