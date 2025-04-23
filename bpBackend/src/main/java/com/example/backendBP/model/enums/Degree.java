package com.example.backendBP.model.enums;

public enum Degree {
    BACHELOR, ENGINEER;

    public String toString() {
        return switch (this) {
            case BACHELOR -> "Bakalár";
            case ENGINEER -> "Inžinier";
        };
    }
}
