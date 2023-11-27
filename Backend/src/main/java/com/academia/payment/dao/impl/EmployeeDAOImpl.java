package com.academia.payment.dao.impl;

import com.academia.payment.util.HibernateSessionUtil;
import com.academia.payment.dao.EmployeeDAO;
import com.academia.payment.bean.Employees;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class EmployeeDAOImpl implements EmployeeDAO {
    /*
        This method performs login of the Student object specified
        So it basically checks whether the credentials provided in the Student object match with
        a Student object in the database
    */
    @Override
    public Employees login(Employees employees) {
        try (Session session = HibernateSessionUtil.getSession();){
            String employeeEmail = employees.getEmail();
            String employeePassword = employees.getPassword();

            List<Object> result = new ArrayList<Object>(
                session.createQuery(
                        "FROM Employees WHERE email = :employeeEmail and password = :employeePassword and isAdmin = true"
                        )
                        .setParameter("employeeEmail", employeeEmail)
                        .setParameter("employeePassword", employeePassword)
                        .list()
            );

            // If no valid Student found, return null so that login failure is understood
            if (result.size() == 0)
                return null;
            else
                return (Employees) result.get(0);
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }

        return null;
    }

    /*
        This method inserts the provided Student object into the database
        Used by the InitializeDB script to initialize the database with dummy data
    */
    @Override
    public void createEmployee(Employees employees) {
        try (Session session = HibernateSessionUtil.getSession()) {
            Transaction transaction = session.beginTransaction();
            session.save(employees);
            transaction.commit();
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }
    }
}