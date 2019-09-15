package ru.raiffeisen.javahack.clientapi;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.service.order.entity.Client;
import ru.raiffeisen.javahack.service.order.entity.FieldValue;

import java.util.List;

@Getter
@Setter
public class OrderInputData {
    private String pageCode;
    private List<FieldValue> blocksData;
    private Client client;
}
