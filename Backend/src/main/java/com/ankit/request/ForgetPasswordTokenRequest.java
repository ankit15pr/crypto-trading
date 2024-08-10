package com.ankit.request;

import com.ankit.domain.VerificationType;
import lombok.Data;

@Data
public class ForgetPasswordTokenRequest {
    private String sendTo;
    private VerificationType verificationType;
}
