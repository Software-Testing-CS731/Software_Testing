package com.academia.payment.service;

import com.academia.payment.bean.Students;
import com.academia.payment.dao.impl.StudentsDAOImpl;

import java.util.List;

public class StudentsService {
    StudentsDAOImpl studentsDAO=new StudentsDAOImpl();

    public List<Students> getStudents(Integer d_id){
        List<Students> studentsList = studentsDAO.getStudents(d_id);

        for(Students student: studentsList)
            student.setDomain(null);

        return studentsList;
    }
}
