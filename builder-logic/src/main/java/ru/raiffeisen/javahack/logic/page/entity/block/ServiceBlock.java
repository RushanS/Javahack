package ru.raiffeisen.javahack.logic.page.entity.block;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ServiceBlock extends Block {

    private String name;
    private String description;
    private List<Service> services = new ArrayList<>();

    public void addService(Service service) {
        services.add(service);
    }

    @Getter
    @Setter
    public static class Service {
        private String name;
        private String description;
    }

}
