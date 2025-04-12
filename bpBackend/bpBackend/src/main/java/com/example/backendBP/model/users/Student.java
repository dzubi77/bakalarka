package com.example.backendBP.model.users;

import com.example.backendBP.enums.StudyField;
import com.example.backendBP.model.thesis.InterestForThemes;
import com.example.backendBP.model.thesis.Work;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.List;

/**
 * Entita uchovavajuca data o studentoch.
 */
@Entity
@DiscriminatorValue("STUDENT")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student extends User {
    private int personalNumber;
    private int yearOfStudy;
    private String studyGroup;
    private StudyField studyField;

    @ElementCollection
    private HashMap<String, String> contacts;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private Work work;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<InterestForThemes> preferredThemes;
}
