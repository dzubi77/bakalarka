package com.example.backendBP.model.thesis;

import com.example.backendBP.model.users.Student;
import com.example.backendBP.model.users.Teacher;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

/**
 * Entita reprezentujuca uz priradenu temu (pracu)
 */
@Entity
@Table(name = "works")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Work {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "theme_id", referencedColumnName = "id")
    @JsonIgnoreProperties("work")
    private Theme theme;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    @JsonIgnoreProperties("work")
    private Student student;

    private Boolean assignedToExam;
}
