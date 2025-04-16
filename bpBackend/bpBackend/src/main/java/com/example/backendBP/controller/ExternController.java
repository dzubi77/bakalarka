package com.example.backendBP.controller;

import com.example.backendBP.service.ExternService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/externs")
public class ExternController {
    private final ExternService externService;
}
