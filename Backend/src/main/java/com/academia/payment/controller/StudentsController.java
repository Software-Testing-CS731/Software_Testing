package com.academia.payment.controller;

import com.academia.payment.bean.Students;
import com.academia.payment.service.StudentsService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/viewStudents")
public class StudentsController {
        StudentsService studentsService = new StudentsService();

        @GET
        @Produces(MediaType.APPLICATION_JSON)
        public Response getStudents(@QueryParam("domainId") int domainId){
            List<Students> studentsList = studentsService.getStudents(domainId);
            return Response.ok().entity(studentsList).build();
        }
}
