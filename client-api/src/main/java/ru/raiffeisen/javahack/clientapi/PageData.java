package ru.raiffeisen.javahack.clientapi;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.service.page.entity.Page;
import ru.raiffeisen.javahack.service.page.entity.block.Block;

import java.util.List;

@Getter
@Setter
public class PageData {
    private String code;
    private String name;
    private List<Block> blocks;
    private Long ownerId;

    public PageData(Page page) {
        this.code = page.getCode();
        this.name = page.getName();
        this.ownerId = page.getOwner().getId();
        this.blocks = page.getBlocks();
    }

}
