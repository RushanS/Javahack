package ru.raiffeisen.javahack.service.page.entity.block;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public abstract class Block {
    private Long id;
    private String name;
    private Integer sortOrder;
}
