package com.ankit.repository;

import com.ankit.modal.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepository extends JpaRepository<Wallet , Long> {
    Wallet findByUserId(Long userId);
}
