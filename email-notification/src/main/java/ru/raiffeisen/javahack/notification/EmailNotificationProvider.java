package ru.raiffeisen.javahack.notification;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import ru.raiffeisen.javahack.logic.notification.NotificationProvider;
import ru.raiffeisen.javahack.logic.order.entity.Client;

@RequiredArgsConstructor
@Component
public class EmailNotificationProvider implements NotificationProvider {

    private final JavaMailSender mailSender;

    @Override
    public void sendNotification(Client clientTo, String subject, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(clientTo.getEmail());
        message.setSubject(subject);
        message.setText(content);
        mailSender.send(message);
    }

}
