package ru.raiffeisen.javahack.repository;

import ru.raiffeisen.javahack.logic.account.Account;
import ru.raiffeisen.javahack.logic.page.CodeUtil;
import ru.raiffeisen.javahack.logic.page.entity.Page;
import ru.raiffeisen.javahack.logic.page.entity.PageStatus;
import ru.raiffeisen.javahack.logic.page.entity.block.*;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MockData {

    private static long idSequence = 1;

    public Page mockPage() {
        Page page = new Page();
        page.setId(idSequence++);
        page.setCode(CodeUtil.generateRandomPageCode());
        page.setStatus(PageStatus.ACTIVE);
        page.setBlocks(mockBlocks());
        page.setOwner(mockAccount());
        return page;
    }

    private List<Block> mockBlocks() {
        List<Block> blocks = new ArrayList<>();
        blocks.add(placeBlock());
        blocks.add(employerBlock());
        blocks.add(dateTimeBlock());
        return blocks;
    }


    private PlaceBlock placeBlock() {
        PlaceBlock placeBlock = new PlaceBlock();
        placeBlock.setId(idSequence++);
        placeBlock.setName("Автосервис");
        placeBlock.setSortOrder(0);
        placeBlock.addPlace(newMockPlace("Москва, Ленинградское шоссе, д.108"));
        placeBlock.addPlace(newMockPlace("Долгопрудный, улица Первомайская, д.24"));
        placeBlock.addPlace(newMockPlace("Химки, улица 9-го мая, д.18"));
        return placeBlock;
    }

    private PlaceBlock.Place newMockPlace(String address) {
        PlaceBlock.Place place = new PlaceBlock.Place();
        place.setId(idSequence++);
        place.setAddress(address);
        place.setLatitude(Math.random());
        place.setLongitude(Math.random());
        place.setRating(Math.random());
        place.setWorkTimeFrom(LocalTime.of(8, 0));
        place.setWorkTimeTo(LocalTime.of(23, 0));
        return place;
    }

    private ServiceBlock serviceBlock() {
        ServiceBlock serviceBlock = new ServiceBlock();
        serviceBlock.setId(idSequence++);
        serviceBlock.setName("Услуга");
        serviceBlock.setSortOrder(1);
        serviceBlock.addService(newMockService("Проведение ТО", ""));
        serviceBlock.addService(newMockService("Диагностика", ""));
        serviceBlock.addService(newMockService("Мойка", " "));
        return serviceBlock;
    }

    private ServiceBlock.Service newMockService(String name, String description) {
        ServiceBlock.Service service = new ServiceBlock.Service();
        service.setName(name);
        service.setDescription(description);
        return service;
    }

    private EmployerBlock employerBlock() {
        EmployerBlock employerBlock = new EmployerBlock();
        employerBlock.setId(idSequence++);
        employerBlock.setName("Сотрудники");
        employerBlock.setSortOrder(2);
        employerBlock.addEmployer(newEmployer("Петров Пётр Петрович", 2));
        employerBlock.addEmployer(newEmployer("Иванов Иван Иванович", 4));
        employerBlock.addEmployer(newEmployer("Сергеев Сергей Сергеевич", 3));
        employerBlock.addEmployer(newEmployer("Семёнов Семён Семёнович", 3));
        return employerBlock;
    }

    private EmployerBlock.Employer newEmployer(String name, int setExperienceYears) {
        EmployerBlock.Employer employer = new EmployerBlock.Employer();
        employer.setName(name);
        employer.setExperienceYears(setExperienceYears);
        return employer;
    }

    private DateTimeBlock dateTimeBlock() {
        DateTimeBlock dateTimeBlock = new DateTimeBlock();
        dateTimeBlock.setId(idSequence++);
        dateTimeBlock.setName("Сотрудники");
        dateTimeBlock.setSortOrder(2);
        dateTimeBlock.setWorkDays(standardWorkDays());
        dateTimeBlock.setDurationMinutes(60);
        dateTimeBlock.setReservedTimes(Arrays.asList(
                LocalDateTime.of(2019, 9, 12, 13, 0),
                LocalDateTime.of(2019, 9, 12, 14, 0)
        ));
        return dateTimeBlock;
    }

    private List<DayOfWeek> standardWorkDays() {
        return Arrays.asList(
                DayOfWeek.MONDAY,
                DayOfWeek.TUESDAY,
                DayOfWeek.WEDNESDAY,
                DayOfWeek.THURSDAY,
                DayOfWeek.FRIDAY,
                DayOfWeek.SATURDAY,
                DayOfWeek.SUNDAY
        );
    }

    public Account mockAccount() {
        Account account = new Account();
        account.setId(idSequence++);
        account.setName("Vilgud");
        account.setEncryptedPassword("1234");
        return account;
    }

}
