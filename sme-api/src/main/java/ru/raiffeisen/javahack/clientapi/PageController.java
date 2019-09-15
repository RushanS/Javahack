package ru.raiffeisen.javahack.clientapi;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.raiffeisen.javahack.service.order.OrderService;
import ru.raiffeisen.javahack.service.order.entity.Order;
import ru.raiffeisen.javahack.service.page.PageService;
import ru.raiffeisen.javahack.service.page.entity.Page;
import ru.raiffeisen.javahack.service.page.entity.block.Block;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/sme")
public class PageController {

	private final PageService pageService;
	private final OrderService orderService;

	@PostMapping("/page")
	public void createPage(@RequestBody Page page) {
		pageService.createNewPage(page);
	}

	@PutMapping("/page/{id}")
	public void updatePage(@PathVariable Long pageId, @RequestBody Page page) {
		page.setId(pageId);
		pageService.updatePage(page);
	}

	@GetMapping("/order")
	public List<Order> getOrders(@RequestParam Long pageId) {
		return orderService.getOrdersByPage(pageId);
	}

	@GetMapping("/block")
	public List<Block> getBlocks() {
		return pageService.getAavailableBlocks();
	}

}
