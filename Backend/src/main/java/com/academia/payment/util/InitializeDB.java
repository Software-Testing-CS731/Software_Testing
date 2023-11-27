package com.academia.payment.util;

import com.academia.payment.bean.Domain;
import com.academia.payment.bean.Employees;
import com.academia.payment.bean.Students;
import com.academia.payment.dao.DomainDAO;
import com.academia.payment.dao.EmployeeDAO;
import com.academia.payment.dao.StudentsDAO;
import com.academia.payment.dao.impl.DomainDAOImpl;
import com.academia.payment.dao.impl.EmployeeDAOImpl;
import com.academia.payment.dao.impl.StudentsDAOImpl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
    Script that initializes the database with dummy entries for all tables
*/
public class InitializeDB {
    public static void main(String[] args) {

        List<List<Object>> employees = Arrays.asList(
                Arrays.asList("IIITB1234", "Prajwal", "JM", "prajwal.jm@iiitb.ac.in", "5678",true),
                Arrays.asList("IIITB1235", "KiranKumar", "B", "kirankumar.b@iiitb.ac.in", "5678",true),
                Arrays.asList("IIITB1236", "Ronaldo", "Christanio", "ronaldo.c@iiitb.ac.in", "5678",false),
                Arrays.asList("IIITB1237", "Dhoni", "MS", "dhoni.ms@iiitb.ac.in", "5678",false)
        );

        List<List<Object>> domains = Arrays.asList(
                Arrays.asList("MTECH-CSE","2022", 4,"GATE"),
                Arrays.asList("MTECH-ECE","2021",2,"GATE"),
                Arrays.asList("IMETCH-CSE","2021", 3, "JEE"),
                Arrays.asList("IMETCH-ECE","2021", 2, "JEE"),
                Arrays.asList("DT","2020", 2, "GATE")
        );

        List<List<Object>> students = Arrays.asList(
                Arrays.asList("MT2022123", "Kohli", "Virat", "kohli.virat@iiitb.ac.in",3.4,20,2024),
                Arrays.asList("MT2022124", "Messi", "Lionel", "messi.l@iiitb.ac.in",3.2,16,2024),
                Arrays.asList("MT2022125", "Sachin", "Tendulkar", "sachin.t@iiitb.ac.in",3.2,16,2024),
                Arrays.asList("MT2022126","Yuvraj","Singh","yuvraj.s@iiitb.ac.in",3.1,16,2024)
                );
        List<List<Object>> students2 = Arrays.asList(
                Arrays.asList("MT2021525", "Rahul", "Dravid", "rahul.d@iiitb.ac.in",3.2,16,2023),
                Arrays.asList("MT2021526","Anil","Kumble","anil.k@iiitb.ac.in",3.1,16,2023)
                );
        List<List<Object>> students3 = Arrays.asList(
                Arrays.asList("IMT2021024","SuryaKumar","Yadav","Suryakumar.y@iiitb.ac.in",3.4,20,2026),
                Arrays.asList("IMT2021176","Hardik","Pandya","Hardik.p@iiitb.ac.in",3.2,16,2026),
                Arrays.asList("IMT2021121","Dinesh","Karthik","Dinesh.k@iiitb.ac.in",3.2,16,2026)
                );
        List<List<Object>> students4 = Arrays.asList(
                Arrays.asList("IMT2021545", "Roger", "Fedrrer", "roger.f@iiitb.ac.in",3.3,20,2026),
                Arrays.asList("IMT2021535","Nadal","Rafael","nadal.r@iiitb.ac.in",3.1,16,2026)
                );
        List<List<Object>> students5 = Arrays.asList(
                Arrays.asList("DT2020512", "Sebastian", "Vettel", "sebastian.v@iiitb.ac.in",3.2,20,2023),
                Arrays.asList("DT2020542", "Hamilton", "Lewis", "hamilton.l@iiitb.ac.in",3.4,16,2023)
            );
        EmployeeDAO employeeDAO = new EmployeeDAOImpl();
        DomainDAO domainDAO = new DomainDAOImpl();
        StudentsDAO studentsDAO = new StudentsDAOImpl();

       List<Students> studentsList1 = new ArrayList<>();
       List<Students> studentsList2 = new ArrayList<>();
       List<Students> studentsList3 = new ArrayList<>();
       List<Students> studentsList4 = new ArrayList<>();
       List<Students> studentsList5 = new ArrayList<>();

       List<List<Students>> studentsLists = new ArrayList<>();

       for(List<Object> student: students){
           Students studentObj = new Students((String) student.get(0),(String) student.get(1),(String) student.get(2),(String) student.get(3),(Double) student.get(4),(Integer) student.get(5),(Integer) student.get(6));
           studentsList1.add(studentObj);
       }
       studentsLists.add(studentsList1);
       for(List<Object> student: students2){
           Students studentObj = new Students((String) student.get(0),(String) student.get(1),(String) student.get(2),(String) student.get(3),(Double) student.get(4),(Integer) student.get(5),(Integer) student.get(6));
           studentsList2.add(studentObj);
       }
       studentsLists.add(studentsList2);
       for(List<Object> student: students3){
           Students studentObj = new Students((String) student.get(0),(String) student.get(1),(String) student.get(2),(String) student.get(3),(Double) student.get(4),(Integer) student.get(5),(Integer) student.get(6));
           studentsList3.add(studentObj);
       }
       studentsLists.add(studentsList3);
        for(List<Object> student: students4){
           Students studentObj = new Students((String) student.get(0),(String) student.get(1),(String) student.get(2),(String) student.get(3),(Double) student.get(4),(Integer) student.get(5),(Integer) student.get(6));
           studentsList4.add(studentObj);
       }
        studentsLists.add(studentsList4);
        for(List<Object> student: students5){
           Students studentObj = new Students((String) student.get(0),(String) student.get(1),(String) student.get(2),(String) student.get(3),(Double) student.get(4),(Integer) student.get(5),(Integer) student.get(6));
           studentsList5.add(studentObj);
       }
        studentsLists.add(studentsList5);

        for (int i=0; i<domains.size();i++) {
            List<Object> domain = domains.get(i);
            Domain domainObj = new Domain((String) domain.get(0), (String) domain.get(1), (Integer) domain.get(2), (String) domain.get(3));

            for(int j=0;j<studentsLists.get(i).size();j++) {
                studentsLists.get(i).get(j).setDomain(domainObj);
            }

            domainObj.setStudentsList(studentsLists.get(i));
            domainDAO.createDomain(domainObj);

            for(int j=0;j<studentsLists.get(i).size();j++) {
                studentsDAO.createStudents(studentsLists.get(i).get(j));
            }
        }

        for(int i=0; i<employees.size(); i++) {
            List<Object> employee = employees.get(i);
            Employees employeesObj = new Employees((String) employee.get(0), (String) employee.get(1), (String) employee.get(2), (String) employee.get(3), (String) employee.get(4), (Boolean) employee.get(5));

            employeeDAO.createEmployee(employeesObj);
        }
    }
}
