package ru.raiffeisen.javahack.clientapi;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.raiffeisen.javahack.service.order.OrderService;
import ru.raiffeisen.javahack.service.order.entity.Order;
import ru.raiffeisen.javahack.service.page.PageService;
import ru.raiffeisen.javahack.service.page.entity.Page;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/sme")
public class PageController {

//	private final ClientService clientService;
//
//	@GetMapping("/{code}")
//	public Page getPage(@PathVariable String code) {
//		return clientService.getPageByCode(code);
//	}

	private final PageService pageService;
	private final OrderService orderService;

	@PostMapping("/page")
	public void createPage(Page page) {
		pageService.createNewPage(page);
	}

	@GetMapping("/order")
	public List<Order> getOrders(@RequestParam Long pageId) {
		return orderService.getOrdersByPage(pageId);
	}

	
}
