package com.academia.payment.dao;

import com.academia.payment.bean.Domain;

import java.util.List;

public interface DomainDAO {
    List<Domain> getDomains();
    void createDomain(Domain domain);

    boolean addDomain(Domain domain);

    boolean updateDomain(Domain domain);
    //
//    List<Students> getStudents(Integer domainId);
}
