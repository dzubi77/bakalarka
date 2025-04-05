package com.example.backendBP.controller;

import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.other.ThesisFilter;
import com.example.backendBP.service.ThemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ThemeController {
    private final ThemeService themeService;

    @PostMapping("/themes")
    public ResponseEntity<Theme> createTheme(@RequestBody Theme theme) {
        var t = themeService.addTheme(theme);
        return ResponseEntity.ok(t);
    }

    @GetMapping("/all_themes")
    public ResponseEntity<List<Theme>> getAllThemes() {
        var l = themeService.getAllThemes();
        return ResponseEntity.ok(l);
    }

    @PostMapping("/themes/filter")
    public ResponseEntity<List<Theme>> getThemesByFilter(@RequestBody ThesisFilter filter) {
        var list = themeService.getFilteredThemes(filter);
        return ResponseEntity.ok(list);
    }
}
