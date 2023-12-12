package com.rachai.Rachai.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.rachai.Rachai.model.User;
import com.rachai.Rachai.repository.UserRepository;

public class UserService {

	@Autowired	
	public UserRepository userRepository;

	public User save (User user) {
		return userRepository.save(user);
	}

	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}