package com.cartmart.controller;

import com.cartmart.dto.UserRequestDTO;
import com.cartmart.dto.UserResponseDTO;
import com.cartmart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> registerUser(@RequestBody UserRequestDTO userRequestDTO) {
        UserResponseDTO response = userService.addUser(userRequestDTO);
        return ResponseEntity.ok(response);
    }
}
