package com.example.backendBP.service;

import com.example.backendBP.repository.ExternRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExternService {
    private final ExternRepository externRepository;
}
