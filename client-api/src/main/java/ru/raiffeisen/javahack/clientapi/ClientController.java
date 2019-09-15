package ru.raiffeisen.javahack.clientapi;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.raiffeisen.javahack.service.page.PageService;
import ru.raiffeisen.javahack.service.page.entity.Page;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/client")
public class ClientController {

	private final PageService pageService;

	@GetMapping("/{code}")
	public Page getPage(@PathVariable String code) {
		return pageService.getPageByCode(code);
	}

}
