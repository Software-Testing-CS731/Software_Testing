package com.academia.payment.service;

import com.academia.payment.bean.Domain;
import com.academia.payment.dao.impl.DomainDAOImpl;

import java.util.List;

public class DomainService {
    DomainDAOImpl domainDAO = new DomainDAOImpl();

    public List<Domain> getDomains(){
        List<Domain> domainList = domainDAO.getDomains();

        // Removing student attribute from returned list to kill cyclic references
        for (Domain domain : domainList)
            domain.setStudentsList(null);

        return domainList;
    }

    public boolean addDomain(Domain domain){
        boolean result=domainDAO.addDomain(domain);
        return result;
    }

    public boolean updateDomain(Domain domain){
        boolean result=domainDAO.updateDomain(domain);
        return result;
    }
//    public List<Students> getStudents(Integer domainId) {
//        return domainDAO.getStudents(domainId);
//    }
}