package com.ankit.service;

import com.ankit.modal.PaymentDetails;
import com.ankit.modal.User;

public interface PaymentDetailsService {

    public PaymentDetails addPaymentDetails(String accountNumber, String accountHolderName, String ifsc, String bankName, User user);

    public PaymentDetails getUserPaymentDetails(User user);
}
