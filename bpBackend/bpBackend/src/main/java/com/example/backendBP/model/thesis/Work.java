package com.example.backendBP.model.thesis;

import com.example.backendBP.model.enums.Degree;
import com.example.backendBP.model.users.Student;
import com.example.backendBP.model.users.Teacher;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private String titleSK;
    private String titleEN;
    private String description;
    @Enumerated(EnumType.ORDINAL)
    private Degree degree;

    @ManyToOne
    @JoinColumn(name = "leader_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"worksLed", "worksTutored"})
    private Teacher leader;

    @ManyToOne
    @JoinColumn(name = "tutor_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"worksLed", "worksTutored"})
    private Teacher tutor;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    @JsonBackReference
    private Student student;
}
