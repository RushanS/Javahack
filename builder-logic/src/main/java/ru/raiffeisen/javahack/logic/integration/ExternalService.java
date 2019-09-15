package ru.raiffeisen.javahack.logic.integration;

import ru.raiffeisen.javahack.logic.page.entity.Page;

public interface ExternalService {
    void publishNewPage(Page page);
    void updatePage(Page page);
}
