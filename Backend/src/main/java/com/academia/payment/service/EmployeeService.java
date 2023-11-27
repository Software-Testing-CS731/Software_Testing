package com.academia.payment.service;

import com.academia.payment.bean.Employees;
import com.academia.payment.dao.impl.EmployeeDAOImpl;

public class EmployeeService {
    EmployeeDAOImpl employeeDAO = new EmployeeDAOImpl();

    public Employees login(Employees employees){
        Employees loggedInEmployees = employeeDAO.login(employees);

        // If no login happens, then return null
        if (loggedInEmployees == null)
            return null;

        // Setting billList to null to avoid cyclic dependency issues
        //loggedInEmployee.setDomainList(null);
        return loggedInEmployees;
    }

}