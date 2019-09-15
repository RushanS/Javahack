package ru.raiffeisen.javahack.service.page;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.service.account.LoggedAccount;
import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.page.entity.block.Block;
import ru.raiffeisen.javahack.service.page.entity.Page;
import ru.raiffeisen.javahack.service.page.entity.PageStatus;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PageService {

    private final PageRepository pageRepository;
    private final LoggedAccount loggedAccount;
    private final BlockRepository blockRepository;

    public List<Page> getPagesForCurrentAccount() {
        Account account = loggedAccount.getCurrentLogged();
        return pageRepository.getAllByOwner(account);
    }

    public List<Block> availableBlocks() {
        return blockRepository.getAvailableBlocks();
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
