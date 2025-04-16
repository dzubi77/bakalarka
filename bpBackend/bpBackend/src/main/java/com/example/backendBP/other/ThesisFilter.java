package com.example.backendBP.other;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Trieda uchovava udaje z filtrov pre temy a prace.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ThesisFilter {
    private String title;
    private String leaderName;
    private String content;
    private String degree;
    private String department;
    private String state;
    private String language;
    private String studentName; //in case of Theme this one is empty or null
}
