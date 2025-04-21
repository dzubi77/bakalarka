package com.example.backendBP.controller;

import com.example.backendBP.model.users.Extern;
import com.example.backendBP.model.users.Student;
import com.example.backendBP.model.users.Teacher;
import com.example.backendBP.other.DTO.ExternDTO;
import com.example.backendBP.other.DTO.StudentDTO;
import com.example.backendBP.other.DTO.TeacherDTO;
import com.example.backendBP.other.LoginRequest;
import com.example.backendBP.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest.getUsername() + " " + loginRequest.getPassword());
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            var user = userRepository.findByUsername(loginRequest.getUsername());
            if (user.isPresent()) {
                var user1 = user.get();
                if (user1 instanceof Student) {
                    return ResponseEntity.ok(new StudentDTO((Student) user1));
                } else if (user1 instanceof Extern) {
                    return ResponseEntity.ok(new ExternDTO((Extern) user1));
                } else {
                    return ResponseEntity.ok(new TeacherDTO((Teacher) user1));
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
