package com.example.backendBP.model.thesis;

import com.example.backendBP.model.enums.Degree;
import com.example.backendBP.model.users.Student;
import com.example.backendBP.model.users.Teacher;
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
    private Degree degree;

    @ManyToOne
    @JoinColumn(name = "leader_id", referencedColumnName = "id")
    private Teacher leader;

    @ManyToOne
    @JoinColumn(name = "tutor_id", referencedColumnName = "id")
    private Teacher tutor;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private Student student;
}
