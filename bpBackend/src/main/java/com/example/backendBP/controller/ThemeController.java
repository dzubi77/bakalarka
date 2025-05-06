package com.example.backendBP.controller;

import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.other.ThesisFilter;
import com.example.backendBP.service.ThemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/themes")
public class ThemeController {
    private final ThemeService themeService;

    @GetMapping("/all")
    public ResponseEntity<List<Theme>> getAllThemes() {
        var list = themeService.getAllThemes();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Theme> getThemeById(@PathVariable UUID id) {
        var t = themeService.getThemeById(id);
        return t != null ? ResponseEntity.ok(t) : ResponseEntity.notFound().build();
    }

    @PostMapping("/filter")
    public ResponseEntity<List<Theme>> getThemesByFilter(@RequestBody ThesisFilter filter) {
        var list = themeService.getFilteredThemes(filter);
        return ResponseEntity.ok(list);
    }
}
