package com.example.backendBP.model;

import jakarta.persistence.*;

import java.util.UUID;

/**
 * Entita reprezentujuca uz priradenu temu (pracu)
 */
@Entity
@Table(name = "works")
public class Work {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

}
