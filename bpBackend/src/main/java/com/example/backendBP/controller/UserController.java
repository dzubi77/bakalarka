package com.example.backendBP.controller;

import com.example.backendBP.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final UserService userService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        var list = userService.getUsers();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable UUID id) {
        var u = userService.getUserById(id);
        return u != null ? ResponseEntity.ok(u) : ResponseEntity.notFound().build();
    }
}
