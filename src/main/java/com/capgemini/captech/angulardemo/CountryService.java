package com.capgemini.captech.angulardemo;

import java.util.Collection;
import java.util.HashMap;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.capgemini.captech.angulardemo.model.Country;

/**
 * @author Guillaume Scheibel <guillaume.scheibel@gmail.com>
 */
@Path("country")
public class CountryService {

	private static HashMap<String, Country> countries;

	public CountryService() {
		if (countries == null) {
			countries = new HashMap<String, Country>();
			countries.put("FR", new Country("FR", "France"));
			countries.put("US", new Country("US", "Etats-Unis"));
		}
	}

	@Path("/all")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Country> getCountries() {

		return countries.values();
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addCountry(Country country) {
		if (countries.containsValue(country)) {
			return Response.status(Response.Status.CONFLICT).build();
		} else {
			countries.put(country.getIso(), country);
			return Response.ok(countries).build();
		}
	}

	/**
	 * return data for a specific Country by its <code>iso</code>.
	 * 
	 * @param iso
	 * @return
	 */
	@Path("/edit/{iso}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCountry(@PathParam("iso") String iso) {
		if (countries.containsKey(iso)) {
			return Response.ok(countries.get(iso)).build();
		} else {
			return Response.status(Response.Status.NOT_FOUND).build();
		}
	}

}
