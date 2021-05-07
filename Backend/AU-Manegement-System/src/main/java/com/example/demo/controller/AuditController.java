package com.example.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Audit;
import com.example.demo.repository.AuditRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AuditController {

	@Autowired
	private AuditRepository auditRepository;
	
	@GetMapping("/audits")
	public List<Audit> getAllAudits(){
		return auditRepository.findAll();
	}
	
	@PostMapping("/audits")
	public Audit createAudit(@RequestBody Audit audit){
		return auditRepository.save(audit);
	}
	
	@GetMapping("/audits/{id}")
	public ResponseEntity<Audit> getAuditById(@PathVariable Long id){
		Audit audit = auditRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Audit not found with id: " + id));
		return ResponseEntity.ok(audit);
	}
	
}
