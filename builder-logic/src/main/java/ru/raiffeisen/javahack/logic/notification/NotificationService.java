package ru.raiffeisen.javahack.logic.notification;

import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import ru.raiffeisen.javahack.logic.order.entity.Client;
import ru.raiffeisen.javahack.logic.order.entity.Order;

import java.util.List;
import java.util.Locale;

@RequiredArgsConstructor
@Service
public class NotificationService {

    private final List<NotificationProvider> notificationProviders;
    private final MessageSource messageSource;

    public void notifyAboutOrder(Order order) {
        String[] params = { order.getPage().getName() };
        String content = messageSource.getMessage("notification.order.content", params, Locale.getDefault());
        String subject = messageSource.getMessage("notification.order.subject", null, Locale.getDefault());
        callAllProviders(order.getClient(), subject, content);
    }

    private void callAllProviders(Client client, String subject, String content) {
        for (NotificationProvider provider : notificationProviders) {
            provider.sendNotification(client, subject, content);
        }
    }

}
