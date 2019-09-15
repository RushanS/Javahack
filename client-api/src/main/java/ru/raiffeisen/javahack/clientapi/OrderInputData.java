package ru.raiffeisen.javahack.clientapi;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.logic.order.entity.Client;
import ru.raiffeisen.javahack.logic.order.entity.FieldValue;

import java.util.List;

@Getter
@Setter
public class OrderInputData {
    private String pageCode;
    private List<FieldValue> blocksData;
    private Client client;
}
