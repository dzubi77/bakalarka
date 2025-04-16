package com.example.backendBP.model.enums;

public enum Department {
    KI, KIS, KMME, KMMOA, KMNT, KST, KTK;

    public String toString() {
        return switch(this) {
            case KI -> "KI";
            case KIS -> "KIS";
            case KMME -> "KMME";
            case KMMOA -> "KMMOA";
            case KMNT -> "KMNT";
            case KST -> "KST";
            case KTK -> "KTK";
        };
    }

    public String getFullName() {
        return switch(this) {
            case KI -> "Katedra informatiky";
            case KIS -> "Katedra informačných sietí";
            case KMME -> "Katedra makro a mikroekonomiky";
            case KMMOA -> "Katedra matematických metód a operačnej analýzy";
            case KMNT -> "Katedra manažérskych teórií";
            case KST -> "Katedra softvérových technológií";
            case KTK -> "Katedra technickej kybernetiky";
        };
    }
}
