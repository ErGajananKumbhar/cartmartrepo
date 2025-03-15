package com.cartmart.service;

import com.cartmart.dto.UserRequestDTO;
import com.cartmart.dto.UserResponseDTO;
import com.cartmart.entity.User;
import com.cartmart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserResponseDTO addUser(UserRequestDTO userRequestDTO) {
        // Check if the email or mobile number already exists
        if (userRepository.existsByEmail(userRequestDTO.getEmail())) {
            return new UserResponseDTO("Error: Email already registered!");
        }

        if (userRepository.existsByMobileNumber(userRequestDTO.getMobileNumber())) {
            return new UserResponseDTO("Error: Mobile number already registered!");
        }

        // Convert DTO to Entity
        User user = new User();
        user.setFirstName(userRequestDTO.getFirstName());
        user.setLastName(userRequestDTO.getLastName());
        user.setEmail(userRequestDTO.getEmail());
        user.setMobileNumber(userRequestDTO.getMobileNumber());
        user.setPassword(userRequestDTO.getPassword());

        // Save User
        userRepository.save(user);

        return new UserResponseDTO("User registered successfully!");
    }
}
