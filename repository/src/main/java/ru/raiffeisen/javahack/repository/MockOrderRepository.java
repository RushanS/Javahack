package ru.raiffeisen.javahack.repository;

import org.springframework.stereotype.Repository;
import ru.raiffeisen.javahack.service.order.OrderRepository;
import ru.raiffeisen.javahack.service.order.entity.Order;

@Repository
public class MockOrderRepository implements OrderRepository {

    @Override
    public void addOrder(Order order) {
        // do nothing
    }

}
