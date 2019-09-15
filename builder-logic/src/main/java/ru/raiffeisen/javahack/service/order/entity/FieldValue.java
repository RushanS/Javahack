package ru.raiffeisen.javahack.service.order.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FieldValue {
    private Field field;
    private String value;
}
