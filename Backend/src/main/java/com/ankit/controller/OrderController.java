package com.ankit.controller;

import com.ankit.domain.OrderType;
import com.ankit.modal.Coin;
import com.ankit.modal.Order;
import com.ankit.modal.User;
import com.ankit.request.CreateOrderRequest;
import com.ankit.service.CoinService;
import com.ankit.service.OrderService;
import com.ankit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private CoinService coinService;

//    @Autowired
//    private  WalletTransactionService walletTransactionService;

//    @Autowired
//    public OrderController(OrderService orderService, UserService userService) {
//        this.orderService = orderService;
//        this.userService = userService;
//    }

    @PostMapping("/pay")
    public ResponseEntity<Order> payOrderPayment(@RequestHeader("Authorization") String jwt, @RequestBody CreateOrderRequest req) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Coin coin = coinService.findById(req.getCoinId());

        Order order = orderService.processOrder(coin ,req.getQuantity() ,req.getOrderType(),user);

        return ResponseEntity.ok(order);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@RequestHeader("Authorization") String jwtToken, @PathVariable long orderId) throws Exception {
//        if(jwtToken == null){
//            throw new Exception("Token missing...");
//        }

        User user = userService.findUserProfileByJwt(jwtToken);

        Order order = orderService.getOrderById(orderId);
        if(order.getUser().getId().equals(user.getId())){
            return ResponseEntity.ok(order);
        }else{
            throw new Exception("Invalid user...");
        }
    }

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrdersForUser(@RequestHeader("Authorization") String jwt, @RequestParam(required = false) OrderType order_type, @RequestParam(required = false) String asset_symbol) throws Exception {
        if(jwt == null){
            throw new Exception("Token missing...");
        }

        Long userId = userService.findUserProfileByJwt(jwt).getId();

        List<Order> userOrders = orderService.getAllOrdersOfUser(userId,order_type,asset_symbol);
        return ResponseEntity.ok(userOrders);
    }
}
