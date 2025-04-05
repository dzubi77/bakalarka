package com.example.backendBP.repository;

import com.example.backendBP.model.thesis.Work;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface WorkRepository extends JpaRepository<Work, UUID> {
}
