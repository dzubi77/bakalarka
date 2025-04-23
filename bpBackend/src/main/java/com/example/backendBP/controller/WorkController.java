package com.example.backendBP.controller;

import com.example.backendBP.model.thesis.Work;
import com.example.backendBP.other.ThesisFilter;
import com.example.backendBP.service.WorkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/works")
public class WorkController {
    private final WorkService workService;

    @GetMapping("/all")
    public ResponseEntity<List<Work>> getAllWorks() {
        var list = workService.getAllWorks();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/filter")
    public ResponseEntity<List<Work>> getWorksByFilter(@RequestBody ThesisFilter filter) {
        var list = workService.getWorksByFilter(filter);
        return ResponseEntity.ok(list);
    }
}
