package com.back.back.repository;

import com.back.back.model.OtherInstallmentPlans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface OtherInstallmentPlansRepository extends JpaRepository<OtherInstallmentPlans, Long> {

}