package com.pizzadelivery.pizza.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("The user i snot exist: "+id);
    }
}
