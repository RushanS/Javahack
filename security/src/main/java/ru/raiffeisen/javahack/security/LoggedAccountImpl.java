package ru.raiffeisen.javahack.security;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.account.LoggedAccount;

@Component
public class LoggedAccountImpl implements LoggedAccount {

    @Override
    public Account getCurrentLogged() {
        SecurityContext context = SecurityContextHolder.getContext();
        Object details = context.getAuthentication().getPrincipal();
        if (details instanceof SmeUserDetails) {
            return ((SmeUserDetails) details).getAccount();
        }
        throw new IllegalStateException("Authentication error. Unknown user details.");
    }

}
