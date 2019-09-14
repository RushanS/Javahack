package ru.raiffeisen.javahack.service.page;

import java.util.Random;

public class CodeUtil {

    private static final int CODE_LENGTH = 8;

    public static String generateRandomPageCode() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        while (sb.length() < CODE_LENGTH) {
            sb.append(Integer.toHexString(random.nextInt()));
        }
        return sb.toString();
    }

}
