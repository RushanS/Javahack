package ru.raiffeisen.javahack.logic.notification;

import ru.raiffeisen.javahack.logic.order.entity.Client;

public interface NotificationProvider {
    void sendNotification(Client clientTo, String content);
}
