package com.ankit.service;

import com.ankit.modal.User;
import com.ankit.modal.Withdrawl;

import java.util.List;

public interface WithdrawlService {

    Withdrawl requestWithdrawl(Long amount, User user);

    Withdrawl procedWithdrawl(Long withdrawlId, boolean accept) throws Exception;

    List<Withdrawl> getUserWithdrawlHistory(User user);

    List<Withdrawl> getAllWithdrawlRequest();
}
