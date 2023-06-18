package com.pizzadelivery.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pizzadelivery.pizza.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long> {
}
