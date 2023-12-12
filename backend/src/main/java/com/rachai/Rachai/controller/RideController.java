package com.rachai.Rachai.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rachai.Rachai.model.Ride;
import com.rachai.Rachai.service.AuthService;
import com.rachai.Rachai.service.RideService;


@RestController
@RequestMapping("/rides")
public class RideController {

	@Autowired
	private RideService rideService;
	@Autowired
	private AuthService authService;


	@GetMapping
	public ResponseEntity<?> find() {
		return ResponseEntity.ok("Hello World");
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Ride>> findAll() {
		List<Ride> list = new ArrayList<Ride>();
		
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<Ride> create(@RequestBody Ride ride, @RequestHeader String token) {
		if (authService.validate(token)) {
			ride.setUser(authService.toUser(token));
			Ride taskCreated = rideService.save(ride);
			
			return ResponseEntity.ok(taskCreated);
		}
		
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Ride> edit(@PathVariable Integer id, @RequestBody Ride ride) {
		Optional<Ride> taskActual = rideService.edit(id, ride);
		if(taskActual.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable Integer id) {
		rideService.delete(id);
		return ResponseEntity.ok().build();
	}
	
}