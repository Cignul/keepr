using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace keepr.Models
{
  public class Vault // Model w/ ctor -  might need helper method(s) to delete etc.
  {

    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [MinLength(5)]
    public string Description { get; set; }
    public int userId { get; set; }
    public int id { get; set; }
    public Vault() { }  //parameterless constructor

  }
}