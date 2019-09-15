package ru.raiffeisen.javahack.service.page.entity.block;

import lombok.Getter;
import lombok.Setter;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class DateTimeBlock extends Block {
    private List<DayOfWeek> workDays;
    private List<LocalDateTime> reservedTimes;
    private Integer durationMinutes;

}
