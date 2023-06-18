package com.pizzadelivery.pizza.controller;
import com.pizzadelivery.pizza.exception.UserNotFoundException;
import com.pizzadelivery.pizza.model.Admin;
import com.pizzadelivery.pizza.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/additem")
    Admin newAdmin(@RequestBody Admin newAdmin) {
        return adminRepository.save(newAdmin);
    }

    @GetMapping("/getitem")
    List<Admin> getUser() {
        return adminRepository.findAll();
    }

    @PutMapping("/updateitem/{id}")
    Admin updateAdmin(@RequestBody Admin newAdmin, @PathVariable Long id) {
        return adminRepository.findById(id).map(user -> {
            user.setid(newAdmin.getid());
            user.setName(newAdmin.getName());
            return adminRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("/finditem/{name}")
    Admin getAdminById(@PathVariable Long id) {
        return adminRepository.findById(id)

                .orElseThrow(() -> new UserNotFoundException(id));

    }

    @DeleteMapping("/deleteitem/{id}")
    String deleteAdmin(@PathVariable Long id) {
        if (!adminRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        adminRepository.deleteById(id);
        return "deleted item";
    }
}
