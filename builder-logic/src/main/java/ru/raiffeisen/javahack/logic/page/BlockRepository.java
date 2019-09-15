package ru.raiffeisen.javahack.logic.page;

import ru.raiffeisen.javahack.logic.page.entity.block.Block;

import java.util.List;

public interface BlockRepository {
    List<Block> getAvailableBlocks();
}
