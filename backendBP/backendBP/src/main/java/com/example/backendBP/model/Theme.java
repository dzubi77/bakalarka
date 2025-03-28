package com.example.backendBP.model;

import jakarta.persistence.*;

import java.util.UUID;

/**
 * Represents an unassigned theme
 */
@Entity
@Table(name = "themes")
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    private String goal;
    
}
