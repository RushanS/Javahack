package ru.raiffeisen.javahack.service.block;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BlockService {

	private final BlockRepository blockRepository;

	public List<Block> availableBlocks() {
		return blockRepository.getAvailableBlocks();
	}

}
