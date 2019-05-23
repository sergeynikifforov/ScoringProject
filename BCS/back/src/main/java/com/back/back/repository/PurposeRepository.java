package com.back.back.repository;

import com.back.back.model.Purpose;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface PurposeRepository extends JpaRepository<Purpose, Long> {

}
