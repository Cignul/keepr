using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace keepr.Models
{
  public class Vault // Model w/ ctor -  might need helper method(s) to delete etc.
  {
    public int Id;
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [MinLength(5)]
    public string Description { get; set; }
    public Vault() { }  //parameterless constructor

  }
}