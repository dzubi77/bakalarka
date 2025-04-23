package com.example.backendBP.model.users;

import com.example.backendBP.model.enums.StudyField;
import com.example.backendBP.model.thesis.InterestForThemes;
import com.example.backendBP.model.thesis.Work;
import com.example.backendBP.other.Contact;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    private Integer personalNumber;
    private Integer yearOfStudy;
    private String studyGroup;
    private StudyField studyField;

    @ElementCollection
    private List<Contact> contacts;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Work work;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("student")
    private List<InterestForThemes> preferredThemes;
}
