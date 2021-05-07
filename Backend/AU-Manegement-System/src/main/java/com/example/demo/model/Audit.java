package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "audit")
public class Audit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Long oid;
	
	@Column(name = "Name")
	private String name;
	@Column(name = "Location")
	private String locations;
	@Column(name = "Hiring_Manager")
	private String hiringManager;
	@Column(name = "skills")
	private String skills;
	@Column(name = "openings")
	private int openings;
	@Column(name = "ED")
	private Date ed;
	@Column(name = "Description")
	private String description;
	
	@Column(name = "Name1")
	private String name1;
	@Column(name = "Location1")
	private String locations1;
	@Column(name = "Hiring_Manager1")
	private String hiringManager1;
	@Column(name = "skills1")
	private String skills1;
	@Column(name = "openings1")
	private int openings1;
	@Column(name = "ED1")
	private Date ed1;
	@Column(name = "Description1")
	private String description1;
	
	@Column(name = "User")
	private String user;
	@Column(name = "Action")
	private String action;
	@Column(name = "AuditOn")
	private Date auditOn;
	
	public Audit() {
		
	}
	public Audit(Long oid, String name, String locations, String hiringManager, String skills, int openings, Date ed,
			String description, String name1, String locations1, String hiringManager1, String skills1, int openings1,
			Date ed1, String description1, String user, String action, Date auditOn) {
		super();
		this.oid = oid;
		this.name = name;
		this.locations = locations;
		this.hiringManager = hiringManager;
		this.skills = skills;
		this.openings = openings;
		this.ed = ed;
		this.description = description;
		this.name1 = name1;
		this.locations1 = locations1;
		this.hiringManager1 = hiringManager1;
		this.skills1 = skills1;
		this.openings1 = openings1;
		this.ed1 = ed1;
		this.description1 = description1;
		this.user = user;
		this.action = action;
		this.auditOn = auditOn;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getOid() {
		return oid;
	}
	public void setOid(Long oid) {
		this.oid = oid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocations() {
		return locations;
	}
	public void setLocations(String locations) {
		this.locations = locations;
	}
	public String getHiringManager() {
		return hiringManager;
	}
	public void setHiringManager(String hiringManager) {
		this.hiringManager = hiringManager;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public int getOpenings() {
		return openings;
	}
	public void setOpenings(int openings) {
		this.openings = openings;
	}
	public Date getEd() {
		return ed;
	}
	public void setEd(Date ed) {
		this.ed = ed;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getName1() {
		return name1;
	}
	public void setName1(String name1) {
		this.name1 = name1;
	}
	public String getLocations1() {
		return locations1;
	}
	public void setLocations1(String locations1) {
		this.locations1 = locations1;
	}
	public String getHiringManager1() {
		return hiringManager1;
	}
	public void setHiringManager1(String hiringManager1) {
		this.hiringManager1 = hiringManager1;
	}
	public String getSkills1() {
		return skills1;
	}
	public void setSkills1(String skills1) {
		this.skills1 = skills1;
	}
	public int getOpenings1() {
		return openings1;
	}
	public void setOpenings1(int openings1) {
		this.openings1 = openings1;
	}
	public Date getEd1() {
		return ed1;
	}
	public void setEd1(Date ed1) {
		this.ed1 = ed1;
	}
	public String getDescription1() {
		return description1;
	}
	public void setDescription1(String description1) {
		this.description1 = description1;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public Date getAuditOn() {
		return auditOn;
	}
	public void setAuditOn(Date auditOn) {
		this.auditOn = auditOn;
	}
}
