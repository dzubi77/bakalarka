package com.example.backendBP.repository;

import com.example.backendBP.model.users.Extern;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ExternRepository extends JpaRepository<Extern, UUID> {
}
