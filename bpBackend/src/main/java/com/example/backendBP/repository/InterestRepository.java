package com.example.backendBP.repository;

import com.example.backendBP.model.thesis.InterestForThemes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InterestRepository extends JpaRepository<InterestForThemes, UUID> {
    boolean existsByStudentIdAndThemeId(UUID studentId, UUID themeId);
    Optional<InterestForThemes> findByStudentIdAndThemeId(UUID studentId, UUID themeId);
    List<InterestForThemes> findByStudentId(UUID studentId);
    List<InterestForThemes> findByThemeId(UUID themeId);
}
