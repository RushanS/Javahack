package ru.raiffeisen.javahack.logic.page;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.logic.account.LoggedAccount;
import ru.raiffeisen.javahack.logic.account.Account;
import ru.raiffeisen.javahack.logic.integration.PublisherToExternalServices;
import ru.raiffeisen.javahack.logic.page.entity.block.Block;
import ru.raiffeisen.javahack.logic.page.entity.Page;
import ru.raiffeisen.javahack.logic.page.entity.PageStatus;

import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@Service
public class PageService {

    private final PageRepository pageRepository;
    private final LoggedAccount loggedAccount;
    private final BlockRepository blockRepository;
    private final PublisherToExternalServices publisherToExternalServices;

    public List<Page> getPagesForCurrentAccount() {
        Account account = loggedAccount.getCurrentLogged();
        return pageRepository.getAllByOwner(account);
    }

    public List<Block> getAavailableBlocks() {
        return blockRepository.getAvailableBlocks();
    }

    public Page getPageByCode(String code) {
        return pageRepository.getByCode(code);
    }

    public void createNewPage(Page page) {
        page.setCode(newPageCode());
        page.setStatus(PageStatus.DRAFT);
        pageRepository.addPage(page);
        publisherToExternalServices.publicNewPageInfo(page);
    }

    private String newPageCode() {
        String code;
        do {
            code = CodeUtil.generateRandomPageCode();
        } while (pageRepository.existsByCode(code));
        return code;
    }

    public void updatePage(Page page) {
        checkAccessToPage(page.getId());
        pageRepository.updatePage(page);
        publisherToExternalServices.updatePageInfo(page);
    }

    private void checkAccessToPage(Long pageId) {
        Account account = loggedAccount.getCurrentLogged();
        Page page = pageRepository.getById(pageId);
        if (!Objects.equals(page.getOwner().getId(), account.getId())) {
            throw new IllegalAccessToPageException();
        }
    }

}
