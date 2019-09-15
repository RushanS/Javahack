package ru.raiffeisen.javahack.logic.order.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FieldValue {
    private Field field;
    private String value;
}
