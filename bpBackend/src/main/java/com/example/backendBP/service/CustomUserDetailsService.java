package com.example.backendBP.service;

import com.example.backendBP.model.users.Extern;
import com.example.backendBP.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(user -> {
                    String role;
                    String password;

                    if (user instanceof Extern extern) {
                        role = "EXTERN";
                        password = extern.getPassword();
                    } else {
                        throw new UsernameNotFoundException("Login not allowed for this user type");
                    }

                    return org.springframework.security.core.userdetails.User
                            .withUsername(user.getUsername())
                            .password(password)
                            .roles(role)
                            .build();
                })
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
