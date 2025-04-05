package com.example.backendBP.controller;

import com.example.backendBP.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TeacherController {
    private final TeacherService teacherService;
}
