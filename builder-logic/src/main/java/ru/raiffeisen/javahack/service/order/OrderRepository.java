package ru.raiffeisen.javahack.service.order;

import ru.raiffeisen.javahack.service.order.entity.Order;
import ru.raiffeisen.javahack.service.page.entity.Page;

import java.util.List;

public interface OrderRepository {
    void addOrder(Order order);
    List<Order> getOrdersByPage(Page page);
}
