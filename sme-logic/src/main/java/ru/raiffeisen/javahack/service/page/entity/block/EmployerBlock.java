package ru.raiffeisen.javahack.service.page.entity.block;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class EmployerBlock extends Block {

    private List<Employer> employers = new ArrayList<>();

    public void addEmployer(Employer employer) {
        employers.add(employer);
    }

    @Getter
    @Setter
    public static class Employer {
        private String name;
        private String imageUrl;
        private String description;
        private Integer experienceYears;
    }

}
