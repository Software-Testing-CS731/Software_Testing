package com.academia.payment.dao.impl;

import com.academia.payment.bean.Students;
import com.academia.payment.dao.StudentsDAO;
import com.academia.payment.util.HibernateSessionUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class StudentsDAOImpl implements StudentsDAO {

    @Override
    public void createStudents(Students student){
        try(Session session= HibernateSessionUtil.getSession()){
            Transaction transaction=session.beginTransaction();
            session.save(student);
            transaction.commit();
        }
        catch(HibernateException exception){
            System.out.println(exception.getLocalizedMessage());
        }
    }

    @Override
    public List<Students> getStudents(Integer d_id){
        List<Students> studentList = new ArrayList<>();
        try(Session session = HibernateSessionUtil.getSession()){
            for(
                    final Object student : session
                    .createQuery("FROM Students WHERE domain.domainId=:d_id")
                    .setParameter("d_id",d_id).list()
            )
                studentList.add((Students) student);
        }
        catch (HibernateException exception){
            System.out.println(exception.getLocalizedMessage());
        }
        return studentList;
    }

}
