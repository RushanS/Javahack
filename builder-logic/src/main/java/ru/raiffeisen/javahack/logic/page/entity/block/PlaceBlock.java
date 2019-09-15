package ru.raiffeisen.javahack.logic.page.entity.block;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PlaceBlock extends Block {

    private List<Place> availablePlaces = new ArrayList<>();

    public void addPlace(Place place) {
        availablePlaces.add(place);
    }

    @Getter
    @Setter
    public static class Place {
        private Long id;
        private String address;
        private Double latitude;
        private Double longitude;
        private LocalTime workTimeFrom;
        private LocalTime workTimeTo;
        private Double rating;
    }

}