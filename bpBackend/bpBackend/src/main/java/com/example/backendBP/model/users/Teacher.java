package com.example.backendBP.model.users;

import com.example.backendBP.enums.Department;
import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.model.thesis.Work;
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
    private int personalNumber;

    @ElementCollection
    private List<String> phone;
    @ElementCollection
    private List<String> office;

    @OneToMany(mappedBy = "leader", cascade = CascadeType.ALL)
    private List<Work> worksLed;

    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL)
    private List<Work> worksTutored;

    @OneToMany(mappedBy = "leader")
    private List<Theme> themesLed;

    @OneToMany(mappedBy = "tutor")
    private List<Theme> themesTutored;
}
