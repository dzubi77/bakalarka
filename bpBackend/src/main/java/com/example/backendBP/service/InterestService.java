package com.example.backendBP.service;

import com.example.backendBP.model.thesis.InterestForThemes;
import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.model.users.Student;
import com.example.backendBP.repository.InterestRepository;
import com.example.backendBP.repository.StudentRepository;
import com.example.backendBP.repository.ThemeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InterestService {
    private final InterestRepository interestRepository;
    private final StudentRepository studentRepository;
    private final ThemeRepository themeRepository;

    public InterestForThemes saveInterest(UUID studentId, UUID themeId) {
        if (existsByStudentAndTheme(studentId, themeId)) {
            throw new IllegalStateException("Interest already exists");
        }

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
        Theme theme = themeRepository.findById(themeId)
                .orElseThrow(() -> new EntityNotFoundException("Theme not found"));

        InterestForThemes interest = new InterestForThemes();
        interest.setStudent(student);
        interest.setTheme(theme);

        student.getPreferredThemes().add(interest);
        theme.getPreferredBy().add(interest);

        return interestRepository.save(interest);
    }

    public void removeInterest(UUID studentId, UUID themeId) {
        InterestForThemes interest = interestRepository.findByStudentIdAndThemeId(studentId, themeId)
                .orElseThrow(() -> new EntityNotFoundException("Interest not found"));
        Student student = interest.getStudent();
        Theme theme = interest.getTheme();
        if (student != null) {
            student.getPreferredThemes().remove(interest);
            studentRepository.save(student);
        }
        if (theme != null) {
            theme.getPreferredBy().remove(interest);
            themeRepository.save(theme);
        }
        interestRepository.delete(interest);
    }

    public boolean existsByStudentAndTheme(UUID studentId, UUID themeId) {
        return interestRepository.existsByStudentIdAndThemeId(studentId, themeId);
    }

    public List<Theme> getAllThemesByStudent(UUID studentId) {
        return interestRepository.findByStudentId(studentId).stream().map(InterestForThemes::getTheme).collect(Collectors.toList());
    }

    public List<Student> getAllStudentsByTheme(UUID themeId) {
        return interestRepository.findByThemeId(themeId).stream().map(InterestForThemes::getStudent).collect(Collectors.toList());
    }
}
