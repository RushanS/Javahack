package ru.raiffeisen.javahack.service.page;

import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.page.entity.Page;

import java.util.List;

public interface PageRepository {
    List<Page> getAllByOwner(Account owner);
    boolean existsByCode(String code);
    Page getByCode(String code);
    void savePage(Page page);
}
