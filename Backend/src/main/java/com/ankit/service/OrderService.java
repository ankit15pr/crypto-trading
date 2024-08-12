package com.ankit.service;

import com.ankit.domain.OrderType;
import com.ankit.modal.Coin;
import com.ankit.modal.Order;
import com.ankit.modal.OrderItem;
import com.ankit.modal.User;

import java.util.List;

public interface OrderService {

    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId) throws Exception;

    List<Order> getAllOrdersOfUser(Long userId, OrderType orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;
}
