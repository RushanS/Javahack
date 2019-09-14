package ru.raiffeisen.javahack.service.page;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.service.account.Account;
import ru.raiffeisen.javahack.service.block.Block;

import java.util.List;

@Getter
@Setter
public class Page {
    private Long id;
    private String code;
    private String name;
    private List<Block> includedBlocks;
    private Account account;
    private PageStatus status;
}
