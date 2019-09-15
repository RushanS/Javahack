package ru.raiffeisen.javahack.service.order.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Field {
    private String name;
    private FieldType type;
}
