package com.example.backendBP.service;

import com.example.backendBP.model.thesis.Work;
import com.example.backendBP.other.ThesisFilter;
import com.example.backendBP.repository.WorkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class WorkService {
    private final WorkRepository workRepository;

    public List<Work> getAllWorks() {
        return workRepository.findAll();
    }

    public Work getWorkById(UUID id) {
        return workRepository.findById(id).orElse(null);
    }

    public List<Work> getWorksByFilter(ThesisFilter filter) {
        return null;
    }
}
