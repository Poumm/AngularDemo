package com.capgemini.captech.angulardemo.model;

/**
 * @author Guillaume Scheibel <guillaume.scheibel@gmail.com>
 */
public class Country {
   private String iso;
   public String getIso() {return iso;}
   public void setIso(String iso) {this.iso = iso;}

   private String name;
   public String getName() {return name;}
   public void setName(String name) {this.name = name;}

   public Country(String iso, String name) {
      this.iso = iso;
      this.name = name;
   }

   public Country() {super();}

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;

      Country country = (Country) o;

      if (!iso.equals(country.iso)) return false;

      return true;
   }

   @Override
   public int hashCode() {
      return iso.hashCode();
   }
}
