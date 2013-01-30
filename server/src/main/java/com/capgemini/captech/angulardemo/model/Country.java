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
}
