package com.example.backendBP.model.thesis;

import com.example.backendBP.model.enums.Degree;
import com.example.backendBP.model.enums.StudyField;
import com.example.backendBP.model.users.Teacher;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

/**
 * Entita reprezentujuca nepriradenu temu
 */
@Entity
@Table(name = "themes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String titleSK;
    private String titleEN;
    private Degree degree;
    private StudyField studyField;
    private String description;

    @ManyToOne
    @JoinColumn(name = "leader_id", referencedColumnName = "id")
    private Teacher leader;

    @ManyToOne
    @JoinColumn(name = "tutor_id", referencedColumnName = "id")
    private Teacher tutor;
}
