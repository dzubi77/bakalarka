package com.example.backendBP.enums;

public enum StudyField {
    INF, IAST, IAR, MAN, PI, IS, IIS, BI, IM, ASI, PI_ING;

    public String toString() {
        return switch (this) {
            case INF -> "Inf";
            case IAST -> "IaST";
            case MAN -> "Man";
            case IAR -> "IaR";
            case PI -> "PI";
            case IS -> "IS";
            case IIS -> "IIS";
            case BI -> "BI";
            case IM -> "IM";
            case ASI -> "ASI";
            case PI_ING -> "PI - ING";
        };
    }

    public String getFullName() {
        return switch (this) {
            case INF -> "Informatika";
            case IAST -> "Informačné a sieťové technológie";
            case MAN -> "Manažment";
            case IAR -> "Informatika a riadenie";
            case PI -> "Počítačové inžinierstvo - Bc";
            case IS -> "Informačné systémy";
            case IIS -> "Inteligentné informačné systémy";
            case BI -> "Biomedicínska informatika";
            case IM -> "Informačný manažment";
            case ASI -> "Aplikované sieťové inžinierstvo";
            case PI_ING -> "Počítačové inžinierstvo - Ing";
        };
    }
}
