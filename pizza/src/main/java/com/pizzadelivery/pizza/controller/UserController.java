package com.pizzadelivery.pizza.controller;
import com.pizzadelivery.pizza.exception.UserNotFoundException;
import com.pizzadelivery.pizza.model.User;
import com.pizzadelivery.pizza.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/adduser")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/getUsers")
    List<User> getUser() {
        return userRepository.findAll();
    }

    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setPrice(newUser.getPrice());
            user.setName(newUser.getName());
            user.setDescription(newUser.getDescription());
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("/finduser/{name}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)

                .orElseThrow(() -> new UserNotFoundException(id));

    }

    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "deleted user";
    }
}
