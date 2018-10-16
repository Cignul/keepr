using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;


namespace keepr.Models
{

  public class VaultKeep
  {
    public int id { get; set; }
    [Required]
    public int KeepId { get; set; }
    [Required]
    public int VaultId { get; set; }
    public string UserId { get; set; }

    public VaultKeep(int vaultId, int keepId, string userId)
    {
      VaultId = vaultId;
      KeepId = keepId;
      UserId = userId;
    }
    public VaultKeep() { }
  }
}