package ru.raiffeisen.javahack.repository;

import org.springframework.stereotype.Repository;
import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.page.PageRepository;
import ru.raiffeisen.javahack.service.page.entity.Page;

import java.util.Collections;
import java.util.List;

@Repository
public class MockPageRepository implements PageRepository {

    private Page mockPage = new MockData().mockPage();

    @Override
    public List<Page> getAllByOwner(Account owner) {
        return Collections.singletonList(mockPage);
    }

    @Override
    public boolean existsByCode(String code) {
        return false;
    }

    @Override
    public Page getByCode(String code) {
        return mockPage;
    }

    @Override
    public void addPage(Page page) {
        // do nothing
    }

    @Override
    public Page getById(Long id) {
        return mockPage;
    }

    @Override
    public void updatePage(Page page) {
        mockPage = page;
    }

}
