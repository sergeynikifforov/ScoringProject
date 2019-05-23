package com.back.back.repository;

import com.back.back.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface PropertyRepository extends JpaRepository<Property, Long> {

}