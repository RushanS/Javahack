package ru.raiffeisen.javahack.clientlogic;

public interface ClientDataRepository {
    ClientPageData getPageDataByCode(String code);
}
