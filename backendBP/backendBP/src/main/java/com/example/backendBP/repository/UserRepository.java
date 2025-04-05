package com.example.backendBP.repository;

import com.example.backendBP.model.users.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<Teacher, UUID> {
}
