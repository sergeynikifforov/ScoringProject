package com.back.back.repository;

import com.back.back.model.Housing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface HousingRepository extends JpaRepository<Housing,Long> {

}