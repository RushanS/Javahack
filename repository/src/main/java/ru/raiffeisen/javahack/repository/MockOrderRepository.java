package ru.raiffeisen.javahack.repository;

import org.springframework.stereotype.Repository;
import ru.raiffeisen.javahack.logic.order.OrderRepository;
import ru.raiffeisen.javahack.logic.order.entity.Order;
import ru.raiffeisen.javahack.logic.page.entity.Page;

import java.util.Collections;
import java.util.List;

@Repository
public class MockOrderRepository implements OrderRepository {

    @Override
    public void addOrder(Order order) {
        // do nothing
    }

    @Override
    public List<Order> getOrdersByPage(Page page) {
        return Collections.emptyList();
    }

}
