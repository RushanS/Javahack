package ru.raiffeisen.javahack.service.order.entity;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.service.page.entity.Page;

import java.util.List;

@Getter
@Setter
public class Order {
    private Page pageInfo;
    private List<FieldValue> blocksData;
    private Client client;
}
