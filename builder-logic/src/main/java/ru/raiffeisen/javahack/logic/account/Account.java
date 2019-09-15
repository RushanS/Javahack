package ru.raiffeisen.javahack.logic.account;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Account {
    private Long id;
    private String name;
    private String encryptedPassword;
}
