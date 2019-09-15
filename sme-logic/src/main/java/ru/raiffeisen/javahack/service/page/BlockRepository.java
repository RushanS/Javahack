package ru.raiffeisen.javahack.service.page;

import ru.raiffeisen.javahack.service.page.entity.block.Block;

import java.util.List;

public interface BlockRepository {
    List<Block> getAvailableBlocks();
}
