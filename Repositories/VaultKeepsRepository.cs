using System;
using System.Data;
using System.Linq;
using BCrypt.Net;
using keepr.Models;
using Dapper;
using System.Collections.Generic;

namespace keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    public IEnumerable<VaultKeep> GetAll()
    {
      return _db.Query<VaultKeep>($"SELECT * FROM vaultkeeps");
    }


    public IEnumerable<Keep> getKeepsByVaultId(int vaultId)
    {
      return _db.Query<Keep>(@"
        SELECT * FROM vaultkeeps vk
        INNER JOIN keeps k ON k.id = vk.keepId 
        WHERE (vaultId = @vaultId) ", new { vaultId });
    }

    public VaultKeep CreateVaultKeep(VaultKeep vaultKeep)
    {
      int id = _db.ExecuteScalar<int>(@"
        INSERT INTO vaultkeeps (vaultId, keepId, userId)
        VALUES (@VaultId, @KeepId, @UserId);
        SELECT LAST_INSERT_ID();
      ", vaultKeep);

      vaultKeep.id = id;
      return vaultKeep;


    }
  }
}

