package ru.raiffeisen.javahack.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.service.order.OrderRepository;
import ru.raiffeisen.javahack.service.order.entity.Order;
import ru.raiffeisen.javahack.service.page.PageRepository;
import ru.raiffeisen.javahack.service.page.entity.Page;

@RequiredArgsConstructor
@Service
public class ClientService {

    private final PageRepository pageRepository;
    private final OrderRepository orderRepository;

    public Page getPageByCode(String code) {
        return pageRepository.getByCode(code);
    }

    public void makeOrder(Order order) {
        orderRepository.addOrder(order);
    }

}
