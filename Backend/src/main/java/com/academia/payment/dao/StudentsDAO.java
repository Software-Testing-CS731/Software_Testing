package com.academia.payment.dao;

import com.academia.payment.bean.Students;

import java.util.List;

public interface StudentsDAO {
    void createStudents(Students student);

    List<Students> getStudents(Integer d_id);
}
