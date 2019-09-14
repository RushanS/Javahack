package ru.raiffeisen.javahack.clientlogic;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ClientService {

    private final ClientDataRepository clientDataRepository;

    public ClientPageData getPageData(String code) {
        return clientDataRepository.getPageDataByCode(code);
    }

}
