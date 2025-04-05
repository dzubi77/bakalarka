package com.example.backendBP.model.users;

import com.example.backendBP.model.enums.Department;
import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.model.thesis.Work;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

/**
 * Entita uchovavajuca data o uciteloch.
 */
@Entity
@Table(name = "teachers")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String degree1;
    private String name;
    private String surname;
    private String degree2;
    private Department department;
    private String email;

    @ElementCollection
    private List<String> phone;
    @ElementCollection
    private List<String> office;

    @OneToMany(mappedBy = "work", cascade = CascadeType.ALL)
    private List<Work> works;

    @OneToMany(mappedBy = "theme", cascade = CascadeType.ALL)
    private List<Theme> themes;
}
