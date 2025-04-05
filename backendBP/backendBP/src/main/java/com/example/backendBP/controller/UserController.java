package com.example.backendBP.controller;

import com.example.backendBP.model.users.User;
import com.example.backendBP.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user) {
        return null;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return null;
    }
}
