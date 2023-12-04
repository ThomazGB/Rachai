package com.rachai.Rachai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rachai.Rachai.model.Ride;
import com.rachai.Rachai.repository.RideRepository;

@Service
public class RideService {

	@Autowired
	private RideRepository rideRepository;

	public Ride save(Ride ride) {
		return rideRepository.save(ride);
	}
	
	public List<Ride> findAll () {
		return rideRepository.findAll();
	}

	public Optional<Ride> edit(Integer id, Ride ride) {
		Optional<Ride> t = rideRepository.findById(id);
		if(t.isPresent()) {
			t.get().setDescription(ride.getDescription());
			t.get().setStatus(ride.getStatus());
			Ride saved = rideRepository.save(t.get());
			return Optional.of(saved);
		};
		
		return null;
	}

	public void delete(Integer id) {
		rideRepository.deleteById(id);
	}
}
