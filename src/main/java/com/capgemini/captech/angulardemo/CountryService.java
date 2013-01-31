package com.capgemini.captech.angulardemo;

import com.capgemini.captech.angulardemo.model.Country;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Guillaume Scheibel <guillaume.scheibel@gmail.com>
 */
@Path("country")
public class CountryService {

   private static HashSet<Country> countries;

   public CountryService() {
      if (countries == null) {
         countries = new HashSet<Country>();
         countries.add(new Country("FR", "France"));
         countries.add(new Country("US", "Etats-Unis"));
      }
   }

   @GET
   @Produces(MediaType.APPLICATION_JSON)
   public Set<Country> getCountries() {
      return countries;
   }

   @PUT
   @Consumes(MediaType.APPLICATION_JSON)
   public Response addCountry(Country country) {
      if (countries.contains(country)) {
         return Response.status(Response.Status.CONFLICT).build();
      } else {
         countries.add(country);
         return Response.ok(countries).build();
      }
   }

}
