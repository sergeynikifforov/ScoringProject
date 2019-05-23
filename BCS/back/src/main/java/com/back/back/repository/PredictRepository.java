package com.back.back.repository;

import com.back.back.model.Predict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PredictRepository extends JpaRepository<Predict,Long> {
}
