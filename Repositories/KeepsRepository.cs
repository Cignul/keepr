using System;
using System.Data;
using System.Linq;
using BCrypt.Net;
using keepr.Models;
using Dapper;
using System.Collections.Generic;

namespace keepr.Repositories
{
  public class KeepsRepository
  {
    IDbConnection _db;
    //just needs name/description

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    public IEnumerable<Keep> GetAll()
    {
      return _db.Query<Keep>("SELECT * FROM keeps;");
    }
    public Keep Create(Keep keep)
    {
      int id = _db.Execute(@"
      INSERT INTO keeps (name, description, VaultId)
      VALUES (@Name, @Description, @VaultId);
      ", keep
      );
      keep.VaultId = id;
      return keep;
      {
        //   name = keep.Name,
        //   description = keep.Description,
        //   vaultId = keep.VaultId
        // });
        // if (success != 1) { return null; }
        // return new Keep()
        // {
        //   Name = creds.Name,
        //   Description = creds.Description,
        //   VaultId = creds.VaultId
        // };
      }

    }

  }
}
