package com.example.backendBP.controller;

import com.example.backendBP.service.ExternService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ExternController {
    private final ExternService externService;
}
