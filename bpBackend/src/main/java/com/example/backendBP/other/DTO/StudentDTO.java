package com.example.backendBP.other.DTO;

import com.example.backendBP.model.enums.StudyField;
import com.example.backendBP.model.thesis.InterestForThemes;
import com.example.backendBP.model.thesis.Work;
import com.example.backendBP.model.users.Student;
import com.example.backendBP.other.Contact;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class StudentDTO {
    private UUID id;
    private String name;
    private String surname;
    private String userType = "student";
    private Integer personalNumber;
    private Integer yearOfStudy;
    private String studyGroup;
    private String studyField;

    private List<Contact> contacts;

    @JsonIgnoreProperties("student")
    private Work work;

    @JsonIgnoreProperties("student")
    private List<InterestForThemes> preferredThemes;

    public StudentDTO(Student student) {
        this.id = student.getId();
        this.name = student.getName();
        this.surname = student.getSurname();
        this.personalNumber = student.getPersonalNumber();
        this.yearOfStudy = student.getYearOfStudy();
        this.studyGroup = student.getStudyGroup();
        this.studyField = student.getStudyField().getFullName();
        this.contacts = student.getContacts();
        this.preferredThemes = student.getPreferredThemes();
        this.work = student.getWork();
    }
}
