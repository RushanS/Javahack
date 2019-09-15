package ru.raiffeisen.javahack.logic.order;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.logic.account.LoggedAccount;
import ru.raiffeisen.javahack.logic.order.entity.Order;
import ru.raiffeisen.javahack.logic.page.PageRepository;
import ru.raiffeisen.javahack.logic.page.entity.Page;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final PageRepository pageRepository;
    private final LoggedAccount loggedAccount;

    public void makeOrder(Order order) {
        orderRepository.addOrder(order);
    }

    public List<Order> getOrdersByPage(Long pageId) {
        Page page = pageRepository.getById(pageId);
        return orderRepository.getOrdersByPage(page);
    }
}
