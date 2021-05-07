package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.AllOpportunity;
import com.example.demo.model.Opportunity;
import com.example.demo.repository.AllOpportunityRepository;
import com.example.demo.repository.OpportunityRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class OpportunityController {
	
	@Autowired
	private OpportunityRepository opportunityRepository;
	@Autowired
	private AllOpportunityRepository allopportunityrepository;

	@GetMapping("/opportunities")
	public List<Opportunity> getAllOpportunity(){
		return opportunityRepository.findAll();
	}
	
	@PostMapping("/opportunities")
	public Opportunity createOpportunity(@RequestBody Opportunity opportunity) {
		AllOpportunity obj = new AllOpportunity(opportunity.getName(), opportunity.getLocations(), opportunity.getHiringManager(), opportunity.getSkills(), opportunity.getOpenings());
		allopportunityrepository.save(obj);
		return opportunityRepository.save(opportunity);
	}
	
	@GetMapping("/opportunities/{id}")
	public ResponseEntity<Opportunity> getOpportunityById(@PathVariable Long id) {
		Opportunity opportunity = opportunityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Opportunity not found with id: " + id));
		return ResponseEntity.ok(opportunity);
	}
	
	@PutMapping("/opportunities/{id}")
	public ResponseEntity<Opportunity> updateOpportunity(@PathVariable Long id, @RequestBody Opportunity opportunityDetails){
		Opportunity opportunity = opportunityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Opportunity not found with id: " + id));
		opportunity.setId(opportunityDetails.getId());
		opportunity.setHiringManager(opportunityDetails.getHiringManager());
		opportunity.setLocations(opportunityDetails.getLocations());
		opportunity.setName(opportunityDetails.getName());
		opportunity.setSkills(opportunityDetails.getSkills());
		opportunity.setOpenings(opportunityDetails.getOpenings());
		opportunity.setEd(opportunityDetails.getEd());
		opportunity.setDescription(opportunityDetails.getDescription());
		AllOpportunity obj = new AllOpportunity(opportunity.getName(), opportunity.getLocations(), opportunity.getHiringManager(), opportunity.getSkills(), opportunity.getOpenings());
		allopportunityrepository.save(obj);
		Opportunity updatedOpportunity =  opportunityRepository.save(opportunity);
		return ResponseEntity.ok(updatedOpportunity);
	}
	
	@DeleteMapping("/opportunities/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOpportunity(@PathVariable Long id){
		Opportunity opportunity = opportunityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Opportunity not found with id: " + id));
		opportunityRepository.delete(opportunity);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
