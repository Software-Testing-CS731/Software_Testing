package com.academia.payment.controller;

import com.academia.payment.bean.Domain;
import com.academia.payment.service.DomainService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("domain")
public class DomainController {
    DomainService domainService = new DomainService();

    /*
        Path: GET /api/bill?studentId={studentId}
        Input: {studentId}
        Response: 200 Status Code with the Bills of the student (if Authorization added, would need to change this)
        Description: Return all bills of the Student with id = {studentId}
    */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDomains() {
        List<Domain> domainList = domainService.getDomains();
        return Response.ok().entity(domainList).build();
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response addDomain(Domain domain){
        System.out.println(String.valueOf(domain));
        if(domainService.addDomain(domain)){
            return Response.status(200).entity("Success").build();
        }
        return Response.status(400).entity("Failure while adding Domain").build();
    }

    @POST
    @Path("/update")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response updateDomain(Domain domain){
        if(domainService.updateDomain(domain)){
            return Response.status(200).entity("Success").build();
        }
        return Response.status(400).entity("Failure while updating Domain").build();
    }


}