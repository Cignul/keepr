using System;
using System.Data;
using System.Linq;
using BCrypt.Net;
using keepr.Models;
using Dapper;

namespace keepr.Repositories
{
  public class KeepsRepository
  {
    IDbConnection _db;
    //just needs name/description
    public Keep createKeep(newKeep creds)
    {
      int success = _db.Execute(@"
      INSERT INTO keeps (name, description, VaultId)
      VALUES (@name, @description, @VaultId);
      ", new
      {
        name = creds.Name,
        description = creds.Description,
        vaultId = creds.VaultId
      });
      if (success != 1) { return null; }
      return new Keep()
      {
        Name = creds.Name,
        Description = creds.Description,
        VaultId = creds.VaultId
      };
    }

  }

}
