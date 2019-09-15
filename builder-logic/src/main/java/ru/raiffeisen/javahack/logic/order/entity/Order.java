package ru.raiffeisen.javahack.logic.order.entity;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.logic.page.entity.Page;

import java.util.List;

@Getter
@Setter
public class Order {
    private Page page;
    private List<FieldValue> blocksData;
    private Client client;
}
