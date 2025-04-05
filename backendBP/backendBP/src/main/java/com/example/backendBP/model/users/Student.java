package com.example.backendBP.model.users;

import com.example.backendBP.model.enums.StudyField;
import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.model.thesis.Work;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

/**
 * Entita uchovavajuca data o studentoch.
 */
@Entity
@Table(name = "students")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String surname;
    private int personalNumber;
    private int yearOfStudy;
    private String group;
    private StudyField studyField;

    @ElementCollection
    private HashMap<String, String> contacts;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private Work work;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Theme> preferredThemes;
}
