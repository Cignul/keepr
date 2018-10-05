using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace keepr.Models
{
  public class Vault // CONSTRUCTOR might need helper method to delete
  {
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [MinLength(5)]
    public string Description { get; set; }
    public Vault() { }  //parameterless constructor

  }
}