package ru.raiffeisen.javahack.clientapi;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.raiffeisen.javahack.service.order.OrderService;
import ru.raiffeisen.javahack.service.order.entity.Order;
import ru.raiffeisen.javahack.service.page.PageService;
import ru.raiffeisen.javahack.service.page.entity.Page;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/client")
public class ClientController {

	private final PageService pageService;
	private final OrderService orderService;

	@GetMapping("/page/{code}")
	public Page getPage(@PathVariable String code) {
		return pageService.getPageByCode(code);
	}

	@PostMapping("/order")
	public void makeOrder(@RequestBody Order order) {
		orderService.makeOrder(order);
	}

}
