package ru.raiffeisen.javahack.repository;

import org.springframework.stereotype.Repository;
import ru.raiffeisen.javahack.service.page.BlockRepository;
import ru.raiffeisen.javahack.service.page.entity.block.Block;
import ru.raiffeisen.javahack.service.page.entity.Field;
import ru.raiffeisen.javahack.service.page.entity.FieldType;

import java.util.List;

@Repository
public class MockBlocksRepository implements BlockRepository {

	private List<Block> mokcBlocks = new MockData().mockPage().getBlocks();

	@Override
	public List<Block> getAvailableBlocks() {
		return mokcBlocks;
	}

}
