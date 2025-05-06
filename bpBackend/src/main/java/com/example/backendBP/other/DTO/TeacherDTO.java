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
import java.util.UUID;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TeacherDTO {
    private UUID id;
    private String name;
    private String surname;
    private String userType = "teacher";
    private String degree1;
    private String degree2;
    private String department;
    private String email;
    private Integer personalNumber;

    private List<Theme> themesLed;
    private List<Theme> themesTutored;

    public TeacherDTO(Teacher teacher) {
        this.id = teacher.getId();
        this.name = teacher.getName();
        this.surname = teacher.getSurname();
        this.degree1 = teacher.getDegree1();
        this.degree2 = teacher.getDegree2();
        this.department = teacher.getDepartment().getFullName();
        this.email = teacher.getEmail();
        this.personalNumber = teacher.getPersonalNumber();

        this.themesLed = teacher.getThemesLed();
        this.themesTutored = teacher.getThemesTutored();
    }
}
