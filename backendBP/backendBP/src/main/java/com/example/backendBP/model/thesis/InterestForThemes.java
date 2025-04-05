package com.example.backendBP.model.thesis;

import com.example.backendBP.model.users.Student;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

/**
 * Asociacna tabulka medzi temami a studentmi.
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

    private List<Student> students;
    private List<Theme> themes;
}
