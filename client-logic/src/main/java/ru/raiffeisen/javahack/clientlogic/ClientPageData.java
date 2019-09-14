package ru.raiffeisen.javahack.clientlogic;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ClientPageData {
    private String code;
    private String name;
    private List<ClientBlockData> blocks;
}
