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
	public PageData getPage(@PathVariable String code) {
        Page page = pageService.getPageByCode(code);
        return new PageData(page);
	}

	@PostMapping("/order")
	public void makeOrder(@RequestBody OrderInputData orderInputData) {
		Page page = pageService.getPageByCode(orderInputData.getPageCode());
		Order order = new Order();
		order.setPageInfo(page);
		order.setBlocksData(orderInputData.getBlocksData());
		order.setClient(orderInputData.getClient());
		orderService.makeOrder(order);
	}

}
