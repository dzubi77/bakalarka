package com.example.backendBP.model.thesis;

import com.example.backendBP.model.users.Student;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

/**
 * Asociacna tabulka medzi temami a studentmi, uchovava zaujem studentov o temy.
 */
@Entity
@Table(name = "interest_for_themes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InterestForThemes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "theme_id")
    private Theme theme;
}
