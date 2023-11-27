package com.academia.payment.bean;

import jakarta.persistence.*;

@Entity
@Table(name="Students")
public class Students {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;

    @Column(nullable = false,unique = true)
    private String rollNumber;

    @Column(nullable = false)
    private String firstName;

    @Column
    private String lastName;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false,columnDefinition = "decimal(2,1) default 0.0")
    private Double cgpa;

    @Column(nullable = false)
    private Integer totalCredits;

    @Column(nullable = false)
    private Integer graduationYear;

    @ManyToOne
    @JoinColumn(name="domainId")
    private Domain domain;

    public Students(){
    }

    public Students(String rollNumber,String firstName,String lastName,String email,Double cgpa,Integer totalCredits,Integer graduationYear){
        this.rollNumber=rollNumber;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.cgpa=cgpa;
        this.totalCredits=totalCredits;
        this.graduationYear=graduationYear;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(String rollNumber) {
        this.rollNumber = rollNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getCgpa() {
        return cgpa;
    }

    public void setCgpa(Double cgpa) {
        this.cgpa = cgpa;
    }

    public Integer getTotalCredits() {
        return totalCredits;
    }

    public void setTotalCredits(Integer totalCredits) {
        this.totalCredits = totalCredits;
    }

    public Integer getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(Integer graduationYear) {
        this.graduationYear = graduationYear;
    }

    public Domain getDomain() {
        return domain;
    }

    public void setDomain(Domain domain) {
        this.domain = domain;
    }
}
