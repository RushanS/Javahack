package ru.raiffeisen.javahack.service.page;

import ru.raiffeisen.javahack.service.account.Account;

import java.util.List;

public interface PageRepository {
    List<Page> getPagesByAccount(Account account);
    boolean existsByCode(String code);
    void savePage(Page page);
}
