package ru.raiffeisen.javahack.repository;

import org.springframework.stereotype.Repository;
import ru.raiffeisen.javahack.logic.page.BlockRepository;
import ru.raiffeisen.javahack.logic.page.entity.block.Block;

import java.util.List;

@Repository
public class MockBlocksRepository implements BlockRepository {

	private List<Block> mokcBlocks = new MockData().mockPage().getBlocks();

	@Override
	public List<Block> getAvailableBlocks() {
		return mokcBlocks;
	}

}
