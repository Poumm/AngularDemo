package com.capgemini.captech.angulardemo;

import com.capgemini.captech.angulardemo.model.Country;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Guillaume Scheibel <guillaume.scheibel@gmail.com>
 */
@Path("country")
public class CountryService {

   @GET
   @Produces(MediaType.APPLICATION_JSON)
   public Set<Country> getCountries(){
      final HashSet<Country> countries = new HashSet<Country>();
      countries.add(new Country("FR", "France"));
      countries.add(new Country("US", "Etats-Unis"));
      return countries;
   }
}
