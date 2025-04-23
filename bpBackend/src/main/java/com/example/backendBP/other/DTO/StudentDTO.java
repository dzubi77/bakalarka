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

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class StudentDTO {
    private String name;
    private String surname;
    private Integer personalNumber;
    private Integer yearOfStudy;
    private String studyGroup;
    private StudyField studyField;

    private List<Contact> contacts;

    @JsonIgnoreProperties("student")
    private Work work;

    @JsonIgnoreProperties("student")
    private List<InterestForThemes> preferredThemes;

    public StudentDTO(Student student) {
        this.name = student.getName();
        this.surname = student.getSurname();
        this.personalNumber = student.getPersonalNumber();
        this.yearOfStudy = student.getYearOfStudy();
        this.studyGroup = student.getStudyGroup();
        this.studyField = student.getStudyField();
        this.contacts = student.getContacts();
        this.preferredThemes = student.getPreferredThemes();
        this.work = student.getWork();
    }
}
