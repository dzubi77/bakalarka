package com.example.backendBP.other;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserFilter {
    private String name;
    private String personId;
    private String personType;
    private String state;
}
