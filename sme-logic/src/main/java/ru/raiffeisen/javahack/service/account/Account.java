package ru.raiffeisen.javahack.service.account;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Account {
    private Long id;
    private String name;
    private String encryptedPassword;
}
