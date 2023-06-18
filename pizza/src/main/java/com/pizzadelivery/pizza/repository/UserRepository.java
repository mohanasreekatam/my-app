package com.pizzadelivery.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pizzadelivery.pizza.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
