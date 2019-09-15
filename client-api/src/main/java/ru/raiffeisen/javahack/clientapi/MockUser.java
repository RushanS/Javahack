package ru.raiffeisen.javahack.clientapi;

import org.springframework.stereotype.Component;
import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.account.LoggedAccount;

@Component
public class MockUser implements LoggedAccount {

    private Account mockAccount = new Account();

    {
        mockAccount.setId(1L);
        mockAccount.setName("Anon");
    }

    @Override
    public Account getCurrentLogged() {
        return mockAccount;
    }
}
