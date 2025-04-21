package com.example.backendBP.other.DTO;

import com.example.backendBP.model.enums.Department;
import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.model.thesis.Work;
import com.example.backendBP.model.users.Teacher;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TeacherDTO {
    private String name;
    private String surname;
    private String degree1;
    private String degree2;
    private Department department;
    private String email;

    @JsonIgnoreProperties("leader")
    private List<Work> worksLed;

    @JsonIgnoreProperties("tutor")
    private List<Work> worksTutored;

    @JsonIgnoreProperties("leader")
    private List<Theme> themesLed;

    @JsonIgnoreProperties("tutor")
    private List<Theme> themesTutored;

    public TeacherDTO(Teacher teacher) {
        this.name = teacher.getName();
        this.surname = teacher.getSurname();
        this.degree1 = teacher.getDegree1();
        this.degree2 = teacher.getDegree2();
        this.department = teacher.getDepartment();
        this.email = teacher.getEmail();
        this.worksLed = teacher.getWorksLed();
        this.worksTutored = teacher.getWorksTutored();
        this.themesLed = teacher.getThemesLed();
        this.themesTutored = teacher.getThemesTutored();
    }
}
