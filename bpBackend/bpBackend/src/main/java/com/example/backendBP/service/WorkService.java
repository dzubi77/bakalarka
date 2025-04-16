package com.example.backendBP.service;

import com.example.backendBP.model.thesis.Work;
import com.example.backendBP.other.ThesisFilter;
import com.example.backendBP.repository.WorkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkService {
    private final WorkRepository workRepository;

    public List<Work> getAllWorks() {
        return workRepository.findAll();
    }

    public List<Work> getWorksByFilter(ThesisFilter filter) {
        return null;
    }
}
