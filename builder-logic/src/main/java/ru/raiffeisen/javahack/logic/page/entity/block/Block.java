package ru.raiffeisen.javahack.logic.page.entity.block;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Block {
    private Long id;
    private String name;
    private Integer sortOrder;
}
