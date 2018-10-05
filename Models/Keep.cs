using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace keepr.Models
{
  public class Keep // CONSTRUCTOR still need helper methods to create, add, delete
  {
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [MinLength(5)]
    public string Description { get; set; }
    public Keep() { }  //parameterless constructor

  }
  public class newKeep // helper method - basically the ctor with associated BoardId
  {
    [Required]
    public string Name { get; set; }
    [Required]
    public string Description { get; set; }
    public int BoardId { get; set; }
  }
  public class addKeep
  {

  }



}
