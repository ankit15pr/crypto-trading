package com.ankit.service;

import com.ankit.domain.VerificationType;
import com.ankit.modal.ForgetPasswordToken;
import com.ankit.modal.User;
import com.ankit.modal.VerificationCode;

public interface ForgetPasswordService {

    ForgetPasswordToken createToken(User user, String id, String otp, VerificationType verificationType, String sendTo);

    ForgetPasswordToken findById(String id);

    ForgetPasswordToken findByUser(Long userId);

    void deleteToken(ForgetPasswordToken token);
}
