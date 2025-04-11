package com.example.bpBackend.controller;

import com.example.bpBackend.model.Student;
import com.example.bpBackend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student s = studentService.addStudent(student);
        return ResponseEntity.ok(s);
    }

    @GetMapping("/hah")
    public String foo() {
        return "Hello World";
    }
}
