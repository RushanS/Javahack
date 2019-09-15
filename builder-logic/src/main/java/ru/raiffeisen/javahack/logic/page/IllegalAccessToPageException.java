package ru.raiffeisen.javahack.logic.page;

public class IllegalAccessToPageException extends RuntimeException {

    public IllegalAccessToPageException() {
        super("Illegal access to page.");
    }
}
