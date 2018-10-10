using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace keepr.Models
{
  public class Keep // CONSTRUCTOR still need to test helper methods to create, add, delete
  {
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [MinLength(5)]
    public string Description { get; set; }

    public int VaultId { get; set; }
    public Keep(string Name, string Description, int VaultId) { }  //parameterless constructor

  }
  public class newKeep // helper method - basically the ctor with associated VaultID
  {
    [Required]
    public string Name { get; set; }
    [Required]
    public string Description { get; set; }
    public int VaultId { get; set; }
  }
  //NEED TO TEST THIS
  public class addKeep
  {
    [Required]
    //might need to update old id here also, most likely
    public int newVaultId { get; set; }
  }
  //needs completion then testing
  public class removeKeep
  {

  }



}
