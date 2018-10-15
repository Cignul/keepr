using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;


namespace keepr.Models
{

  public class VaultKeep
  {
    [Required]
    public int KeepId { get; set; }
    [Required]
    public int VaultId { get; set; }
    public string UserId { get; set; }
  }


  public class Keep // CONSTRUCTOR still need to test helper methods to create, add, delete
  {
    //not sure if i need to include id or auto generated from table
    public int id;
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [MinLength(5)]
    public string Description { get; set; }

    public string userId { get; set; }

    //not sure if string is correct type here
    public string img { get; set; }
    public int views { get; set; }
    public int shares { get; set; }

    public int keeps { get; set; }

    public bool isPrivate { get; set; }
    //Most likely need to add an image to make it more similar to pinterest, and a field for that input

    public Keep() { }
    //public Keep(string Name, string Description, int VaultId) { }  //parameterless constructor

  }
  public class newKeep // helper method - basically the ctor with associated VaultID
  {
    [Required]
    public string Name { get; set; }
    [Required]
    public string Description { get; set; }
    public int VaultId { get; set; }

    public bool isPrivate { get; set; }
  }
  public class addKeep
  {
    [Required]
    //might need to update old id here also, most likely
    public int newVaultId { get; set; }
  }
  //TODO: needs completion then testing
  public class removeKeep
  {

  }



}
