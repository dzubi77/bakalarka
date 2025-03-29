package com.example.backendBP.service;

import com.example.backendBP.repository.ThesisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ThesisService {
    private final ThesisRepository thesisRepository;
}
