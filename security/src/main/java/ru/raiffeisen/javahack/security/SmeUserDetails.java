package ru.raiffeisen.javahack.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import ru.raiffeisen.javahack.service.account.Account;

import java.util.Collection;
import java.util.Collections;

public class SmeUserDetails implements UserDetails {

    private Account account;

    SmeUserDetails(Account account) {
        this.account = account;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(Authorities.ROLE_SME_USER);
    }

    @Override
    public String getPassword() {
        return account.getEncryptedPassword();
    }

    @Override
    public String getUsername() {
        return account.getName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    Account getAccount() {
        return account;
    }

}
