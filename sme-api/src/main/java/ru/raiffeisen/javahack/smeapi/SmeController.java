package ru.raiffeisen.javahack.smeapi;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.raiffeisen.javahack.logic.order.OrderService;
import ru.raiffeisen.javahack.logic.order.entity.Order;
import ru.raiffeisen.javahack.logic.page.PageService;
import ru.raiffeisen.javahack.logic.page.entity.Page;
import ru.raiffeisen.javahack.logic.page.entity.block.Block;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/sme")
public class SmeController {

	private final PageService pageService;
	private final OrderService orderService;

	@GetMapping
	public List<Page> getPages() {
		return pageService.getPagesForCurrentAccount();
	}

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
