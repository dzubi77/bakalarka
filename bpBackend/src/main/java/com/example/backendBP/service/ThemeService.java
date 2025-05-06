package com.example.backendBP.service;

import com.example.backendBP.model.thesis.Theme;
import com.example.backendBP.other.ThesisFilter;
import com.example.backendBP.repository.ThemeRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ThemeService {
    private final ThemeRepository themeRepository;
    private final EntityManager em;

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Theme getThemeById(UUID id) {
        return themeRepository.findById(id).orElse(null);
    }

    public List<Theme> getFilteredThemes(ThesisFilter filter) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Theme> query = cb.createQuery(Theme.class);
        Root<Theme> root = query.from(Theme.class);

        List<Predicate> predicates = new ArrayList<>();

        if (filter.getTitle() != null) {
            predicates.add(cb.like(root.get("title"), "%" + filter.getTitle() + "%"));
        }
        if (filter.getLeaderName() != null) {
            predicates.add(cb.like(root.get("leaderName"), "%" + filter.getLeaderName() + "%"));
        }
        if (filter.getContent() != null) {
            predicates.add(cb.like(root.get("content"), "%" + filter.getContent() + "%"));
        }
        if (filter.getDegree() != null) {
            predicates.add(cb.equal(root.get("degree"), filter.getDegree()));
        }
        if (filter.getDepartment() != null) {
            predicates.add(cb.equal(root.get("department"), filter.getDepartment()));
        }
        if (filter.getState() != null) {
            predicates.add(cb.equal(root.get("state"), filter.getState()));
        }
        if (filter.getLanguage() != null) {
            predicates.add(cb.equal(root.get("language"), filter.getLanguage()));
        }

        query.where(predicates.toArray(new Predicate[0]));
        return em.createQuery(query).getResultList();
    }
}
