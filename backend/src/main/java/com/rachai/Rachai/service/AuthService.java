package com.rachai.Rachai.service;

import java.time.Instant;
import java.util.Base64;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rachai.Rachai.model.User;

@Service
public class AuthService {
	@Autowired
	private UserService userService;

	public String authenticate(String email, String password) {
		Optional<User> user =userService.findByEmail(email);

		if(user.isPresent() && user.get().getPassword().equals(password)) {
			String token = String.format("%s|%s|%d|%d", 
					user.get().getEmail(),
					user.get().getRA(),
					user.get().getId(),
					Instant.now().toEpochMilli());

			return String.format("{\"token\":\"%s\"}", Base64.getEncoder().encodeToString(token.getBytes()));
		}

		return null;
	}

	public boolean validate (String token) {
		String[] split = toUserArray(token);
		Instant instant = Instant.ofEpochMilli(Long.valueOf(split[3]));

		return instant.isAfter(Instant.now().minusSeconds(120));
	}

	public User toUser (String token) {
		String[] split = toUserArray(token);
		return new User(Integer.valueOf(split[2])
				, split[0]
				, null
				, split[1]);
	}

	private String[] toUserArray (String token) {
		byte[] decode = Base64.getDecoder().decode(token);
		String auth = new String(decode);
		String[] split = auth.split("\\|");
		return split;
	}
}
