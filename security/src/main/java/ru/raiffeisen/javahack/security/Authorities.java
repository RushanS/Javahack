package ru.raiffeisen.javahack.security;

import org.springframework.security.core.GrantedAuthority;

public enum Authorities implements GrantedAuthority {

    ROLE_SME_USER;

    @Override
    public String getAuthority() {
        return name();
    }
}
