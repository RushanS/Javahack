package ru.raiffeisen.javahack;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BlockController {

	@GetMapping
	public List<String> ping() {
		return Arrays.asList("Block1", "Blcok2");
	}

}
