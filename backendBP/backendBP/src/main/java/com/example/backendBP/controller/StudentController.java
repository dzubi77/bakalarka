package com.example.backendBP.controller;

import com.example.backendBP.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;
}
