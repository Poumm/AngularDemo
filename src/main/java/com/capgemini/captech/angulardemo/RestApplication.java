package com.capgemini.captech.angulardemo;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Guillaume Scheibel <guillaume.scheibel@gmail.com>
 */
@ApplicationPath("/restapi")
public class RestApplication extends Application {
   @SuppressWarnings("unchecked")
@Override
   public Set<Class<?>> getClasses() {
      return new HashSet<Class<?>>(Arrays.asList(CountryService.class));
   }
}
