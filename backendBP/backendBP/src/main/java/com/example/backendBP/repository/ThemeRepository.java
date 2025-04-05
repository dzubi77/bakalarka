package com.example.backendBP.repository;

import com.example.backendBP.model.thesis.Theme;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ThemeRepository extends JpaRepository<Theme, UUID> {
}
