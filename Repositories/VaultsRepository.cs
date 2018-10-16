using System;
using System.Data;
using System.Linq;
using BCrypt.Net;
using keepr.Models;
using Dapper;
using System.Collections.Generic;

namespace keepr.Repositories
{
  public class VaultsRepository
  {
    IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }
    public IEnumerable<Vault> GetAllVaults()
    {
      return _db.Query<Vault>("SELECT * FROM vaults;");
    }
    public Vault GetById(int id)
    {
      return _db.Query<Vault>("SELECT * FROM vaults WHERE id = @id;", new { id }).FirstOrDefault();
    }

    public Vault Create(Vault vault)
    {
      int id = _db.ExecuteScalar<int>(@"
      INSERT INTO vaults (name, description)
      VALUES (@Name, @Description);
      SELECT LAST_INSERT_ID();", vault
      );

      // keep.Description = Description,
      vault.id = id;
      return vault;
      {
      }
    }

    public IEnumerable<Keep> getKeepsByVaultId(int vaultId)
    {
      return _db.Query<Keep>(@"
        SELECT * FROM vaultkeeps vk
        INNER JOIN keeps k ON k.id = vk.keepId 
        WHERE (vaultId = @vaultId) ", new { vaultId });
    }

    public bool CreateVaultKeep(VaultKeep vkdata)
    {
      var resolved = _db.Execute(@"
        INSERT INTO vaultkeeps (vaultId, keepId, userId)
        VALUES (@VaultId, @KeepId, @UserId)
      ", vkdata);
      if (resolved > 0)
      {
        return true;
      }
      return false;
    }
  }
}