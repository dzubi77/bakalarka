package com.example.backendBP.controller;

import com.example.backendBP.service.WorkService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WorkController {
    private final WorkService workService;
}
