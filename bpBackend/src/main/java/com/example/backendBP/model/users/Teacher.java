package com.example.backendBP.model.users;

import com.example.backendBP.model.enums.Department;
import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.model.thesis.Work;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Entita uchovavajuca data o uciteloch.
 */
@Entity
@DiscriminatorValue("TEACHER")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Teacher extends User {
    private String degree1;
    private String degree2;
    private Department department;
    private String email;
    private Integer personalNumber;

    @ElementCollection
    private List<String> phone;

    @ElementCollection
    private List<String> office;

    @OneToMany(mappedBy = "leader")
    @JsonIgnoreProperties("leader")
    private List<Theme> themesLed;

    @OneToMany(mappedBy = "tutor")
    @JsonIgnoreProperties("tutor")
    private List<Theme> themesTutored;
}
