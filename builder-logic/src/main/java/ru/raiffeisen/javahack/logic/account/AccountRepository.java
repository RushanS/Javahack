package ru.raiffeisen.javahack.logic.account;

public interface AccountRepository {
    Account getByUserName(String username);
}
