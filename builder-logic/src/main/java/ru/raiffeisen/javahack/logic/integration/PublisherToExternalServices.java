package ru.raiffeisen.javahack.logic.integration;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.logic.page.entity.Page;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PublisherToExternalServices {

    private final List<ExternalService> externalServices;

    public void publicNewPageInfo(Page page) {
        externalServices.forEach(it -> it.publishNewPage(page));
    }

    public void updatePageInfo(Page page) {
        externalServices.forEach(it -> it.updatePage(page));
    }

}
