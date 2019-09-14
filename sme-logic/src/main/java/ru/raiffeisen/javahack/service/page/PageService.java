package ru.raiffeisen.javahack.service.page;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.account.LoggedAccount;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PageService {

    private final PageRepository pageRepository;
    private final LoggedAccount loggedAccount;

    public List<Page> getPagesForCurrentAccount() {
        Account account = loggedAccount.getCurrentLogged();
        return pageRepository.getPagesByAccount(account);
    }

    public void createNewPage(Page page) {
        page.setCode(newPageCode());
        page.setStatus(PageStatus.DRAFT);
        pageRepository.savePage(page);
    }

    private String newPageCode() {
        String code;
        do {
            code = CodeUtil.generateRandomPageCode();
        } while (pageRepository.existsByCode(code));
        return code;
    }

}
