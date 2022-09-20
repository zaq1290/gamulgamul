package com.lemonmul.gamulgamul.service;

import com.lemonmul.gamulgamul.entity.BusinessType;
import com.lemonmul.gamulgamul.entity.favorite.FavoriteTotalPrice;
import com.lemonmul.gamulgamul.entity.user.User;
import com.lemonmul.gamulgamul.repo.FavoriteTotalPriceRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FavoriteTotalPriceService {

    private final FavoriteTotalPriceRepo favoriteTotalPriceRepo;

    // 즐겨찾기 가격 총합을 받아오는 함수(아직 제대로 동작하는지 확인 못함)
    public List<FavoriteTotalPrice> getFavoriteTotalPrices(User user, BusinessType businessType, LocalDate date) {
        return favoriteTotalPriceRepo.findAllByUserIdAndBusinessTypeAndResearchDateBetween(user, businessType, date.minusYears(1), date);
    }
}
