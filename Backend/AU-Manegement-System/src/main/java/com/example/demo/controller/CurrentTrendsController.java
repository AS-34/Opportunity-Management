package com.example.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Opportunity;
import com.example.demo.model.Trend;
import com.example.demo.repository.OpportunityRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class CurrentTrendsController {
	@Autowired
	private OpportunityRepository opportunityRepository;

	@GetMapping("/currentLocationTrends")
	public List<Trend> getAllCurrentLocations(){
		List<Opportunity> opportunities = opportunityRepository.findAll();
		List<Trend> ret = new ArrayList<Trend>();
		Map<String, Integer> map = new HashMap<String, Integer>();
		for(Opportunity o: opportunities) {
			String cur = o.getLocations();
			if(map.containsKey(cur)) {
				int count = map.get(cur);
				map.put(cur, count + 1);
			}
			else {
				map.put(cur, 1);
			}
		}
		for(Map.Entry<String, Integer> entry: map.entrySet()) {
			Trend obj = new Trend();
			obj.setName(entry.getKey());
			obj.setValue(entry.getValue());
			ret.add(obj);
		}
		return ret;
	}
	
	@GetMapping("/currentPositionTrends")
	public List<Trend> getAllCurrentPositions(){
		List<Opportunity> opportunities = opportunityRepository.findAll();
		List<Trend> ret = new ArrayList<Trend>();
		Map<String, Integer> map = new HashMap<String, Integer>();
		for(Opportunity o: opportunities) {
			String cur = o.getName();
			if(map.containsKey(cur)) {
				int count = map.get(cur);
				map.put(cur, count + 1);
			}
			else {
				map.put(cur, 1);
			}
		}
		for(Map.Entry<String, Integer> entry: map.entrySet()) {
			Trend obj = new Trend();
			obj.setName(entry.getKey());
			obj.setValue(entry.getValue());
			ret.add(obj);
		}
		return ret;
	}
	
	@GetMapping("/currentSkillTrends")
	public List<Trend> getAllCurrentSkills(){
		List<Opportunity> opportunities = opportunityRepository.findAll();
		List<Trend> ret = new ArrayList<Trend>();
		Map<String, Integer> map = new HashMap<String, Integer>();
		for(Opportunity o: opportunities) {
			String cur = o.getSkills();
			if(map.containsKey(cur)) {
				int count = map.get(cur);
				map.put(cur, count + 1);
			}
			else {
				map.put(cur, 1);
			}
		}
		for(Map.Entry<String, Integer> entry: map.entrySet()) {
			Trend obj = new Trend();
			obj.setName(entry.getKey());
			obj.setValue(entry.getValue());
			ret.add(obj);
		}
		return ret;
	}
}
