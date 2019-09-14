package ru.raiffeisen.javahack.service.block;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Repository
public class BlockRepositoryMock implements BlockRepository {

	private static final List<Block> DEFINED_BLOCKS = Arrays.asList(

	);

	@Override
	public List<Block> getAvailableBlocks() {
		return DEFINED_BLOCKS;
	}
}
