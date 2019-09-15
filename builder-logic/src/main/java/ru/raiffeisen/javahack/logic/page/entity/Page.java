package ru.raiffeisen.javahack.logic.page.entity;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.logic.account.Account;
import ru.raiffeisen.javahack.logic.page.entity.block.Block;

import java.util.List;

@Getter
@Setter
public class Page {
    private Long id;
    private String code;
    private String name;
    private List<Block> blocks;
    private Account owner;
    private PageStatus status;
}
