package ru.raiffeisen.javahack.service.order.entity;

import lombok.Getter;
import lombok.Setter;
import ru.raiffeisen.javahack.service.page.entity.Field;

@Getter
@Setter
public class FieldValue {
    private Field field;
    private String value;
}
