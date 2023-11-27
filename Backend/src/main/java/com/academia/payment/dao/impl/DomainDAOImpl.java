package com.academia.payment.dao.impl;

import com.academia.payment.bean.Domain;
import com.academia.payment.dao.DomainDAO;
import com.academia.payment.util.HibernateSessionUtil;

import jakarta.persistence.Query;
import jakarta.persistence.Subgraph;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class DomainDAOImpl implements DomainDAO {
    /*
        This method fetches all the Bills of the Students with ID = s_id
    */
    @Override
    public List<Domain>
    getDomains() {
        List<Domain> domainList = new ArrayList<>();

        try (Session session = HibernateSessionUtil.getSession()){
            for (
                    final Object domain : session
                    .createQuery("FROM Domain").list()
            )
                domainList.add((Domain) domain);
        }
        catch (HibernateException exception) {
            System.out.println(exception.getLocalizedMessage());
        }

        return domainList;
    }

    /*
        This method "pays" the Bill with ID = billId
        So it basically deletes the Bill with the given ID
    */
//    @Override
//    public List<Students> getStudents(Integer domainId) {
//        List<Students> studentList = new ArrayList<>();
//        try (Session session = HibernateSessionUtil.getSession()) {
//            for (
//                    final Object student : session
//                    .createQuery("FROM Students WHERE domain.domainId=:domainId").list()
//            )
//                studentList.add((Students) student);
//        } catch (HibernateException exception) {
//            System.out.println(exception.getLocalizedMessage());
//        }
//
//        return studentList;
//    }
//        try (Session session = HibernateSessionUtil.getSession()) {
//            Transaction transaction = session.beginTransaction();
//            String query_string="SELECT FROM Students WHERE domainId=:domainId";
//            Query query=session.createQuery(query_string);
//            query.setParameter("domainId", domainId);
//            query.executeUpdate();
//            transaction.commit();
//            return true;
//
//        } catch (HibernateException exception) {
//            System.out.print(exception.getLocalizedMessage());
//        }
//        return false;

    /*
        This method inserts the given Bill object into the Database
        Not used by any Controller but it is used by the InitializeDB script to initialize the
        database with dummy data
    */
    @Override
    public void createDomain(Domain domain) {
        try (Session session = HibernateSessionUtil.getSession()) {
            Transaction transaction = session.beginTransaction();
            session.save(domain);
            transaction.commit();
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }
    }

    @Override
    public boolean addDomain(Domain domain){
        try(Session session=HibernateSessionUtil.getSession()){
            Transaction transaction=session.beginTransaction();
            session.save(domain);
            transaction.commit();
            return true;
        }
        catch(HibernateException exception){
            System.out.println(exception.getLocalizedMessage());
            return false;
        }
    }

    @Override
    public boolean updateDomain(Domain domain){
        try(Session session=HibernateSessionUtil.getSession()){
            Transaction transaction=session.beginTransaction();
            Integer domainId=domain.getDomainId();
            int result=session.createQuery(
                    "UPDATE Domain SET program=:program,batch=:batch,capacity=:capacity,qualification=:qualification WHERE domainId=:domainId"
            ).setParameter("program",domain.getProgram())
                    .setParameter("batch",domain.getBatch())
                    .setParameter("capacity",domain.getCapacity())
                    .setParameter("qualification",domain.getQualification())
                    .setParameter("domainId",domainId)
                    .executeUpdate();
            transaction.commit();
            if(result==0){
                return false;
            }
            else {
                return true;
            }
        }
        catch(HibernateException exception){
            System.out.println(exception.getLocalizedMessage());
            return false;
        }
    }
}