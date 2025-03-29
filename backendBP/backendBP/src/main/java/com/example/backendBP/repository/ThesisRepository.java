package com.example.backendBP.repository;

import com.example.backendBP.model.Theme;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ThesisRepository extends JpaRepository<Theme, UUID> {
}
