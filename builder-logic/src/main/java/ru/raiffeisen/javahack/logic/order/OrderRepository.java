package ru.raiffeisen.javahack.logic.order;

import ru.raiffeisen.javahack.logic.order.entity.Order;
import ru.raiffeisen.javahack.logic.page.entity.Page;

import java.util.List;

public interface OrderRepository {
    void addOrder(Order order);
    List<Order> getOrdersByPage(Page page);
}
