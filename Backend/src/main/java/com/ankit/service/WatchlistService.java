package com.ankit.service;

import com.ankit.modal.Coin;
import com.ankit.modal.User;
import com.ankit.modal.Watchlist;

public interface WatchlistService {
    Watchlist findUserWatchlist(Long userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist findByid(Long id) throws Exception;

    Coin addItemToWatchlist(Coin coin, User user) throws Exception;
}
