package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AllOpportunity;
import com.example.demo.repository.AllOpportunityRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AllOpportunityController {
	@Autowired
	private AllOpportunityRepository allopportunityrepository;
	
	@GetMapping("/allopportunities")
	public List<AllOpportunity> getAllOpportunity(){
		return allopportunityrepository.findAll();
	}
}
