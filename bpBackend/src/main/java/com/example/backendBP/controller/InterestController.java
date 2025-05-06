package com.example.backendBP.controller;

import com.example.backendBP.service.InterestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/interests")
public class InterestController {
    private final InterestService interestService;

    @PostMapping
    public ResponseEntity<?> insertInterest(@RequestParam UUID studentId, @RequestParam UUID themeId) {
        var i = interestService.saveInterest(studentId, themeId);
        return i != null ? ResponseEntity.ok(i) : ResponseEntity.notFound().build();
    }

    @DeleteMapping
    public ResponseEntity<?> removeInterest(@RequestParam UUID studentId, @RequestParam UUID themeId) {
        interestService.removeInterest(studentId, themeId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/has-interest")
    public ResponseEntity<Boolean> hasInterest(@RequestParam UUID studentId, @RequestParam UUID themeId) {
        boolean exists = interestService.existsByStudentAndTheme(studentId, themeId);
        return ResponseEntity.ok(exists);
    }

    @GetMapping("/t/{themeId}")
    public ResponseEntity<?> findStudentsByTheme(@PathVariable UUID themeId) {
        var l = interestService.getAllStudentsByTheme(themeId);
        return ResponseEntity.ok(l);
    }

    @GetMapping("/s/{studentId}")
    public ResponseEntity<?> findThemesByStudentId(@PathVariable UUID studentId) {
        var l = interestService.getAllThemesByStudent(studentId);
        return ResponseEntity.ok(l);
    }
}
