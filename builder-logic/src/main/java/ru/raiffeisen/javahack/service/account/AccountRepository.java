package ru.raiffeisen.javahack.service.account;

public interface AccountRepository {
    Account getByUserName(String username);
}
