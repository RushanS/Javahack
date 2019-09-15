package ru.raiffeisen.javahack.logic.page;

import ru.raiffeisen.javahack.logic.account.Account;
import ru.raiffeisen.javahack.logic.page.entity.Page;

import java.util.List;

public interface PageRepository {
    List<Page> getAllByOwner(Account owner);
    Page getById(Long id);
    boolean existsByCode(String code);
    Page getByCode(String code);
    void addPage(Page page);
    void updatePage(Page page);
}
