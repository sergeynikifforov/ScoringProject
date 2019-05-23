package com.back.back.repository;

import com.back.back.model.CreditInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface CreditInfoRepository extends JpaRepository<CreditInfo, Long> {
}
