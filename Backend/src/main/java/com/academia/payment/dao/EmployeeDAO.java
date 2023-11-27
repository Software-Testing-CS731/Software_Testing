package com.academia.payment.dao;

import com.academia.payment.bean.Employees;

public interface EmployeeDAO {
    Employees login(Employees employees);
    void createEmployee(Employees employees);
}
