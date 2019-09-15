package ru.raiffeisen.javahack.service.order;

import ru.raiffeisen.javahack.service.order.entity.Order;

public interface OrderRepository {
    void addOrder(Order order);
}
