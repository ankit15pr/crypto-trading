package com.ankit.service;

import com.ankit.domain.PaymentMethod;
import com.ankit.modal.PaymentOrder;
import com.ankit.modal.User;
import com.ankit.response.PaymentResponse;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

public interface PaymentService {

    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean proccedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user, Long amount) throws RazorpayException;

    PaymentResponse createStripPaymentLink(User user, Long amount, Long orderId) throws StripeException;
}
