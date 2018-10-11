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
      INSERT INTO keeps (name, description)
      VALUES (@Name, @Description);
      ", keep
      );
      //removed 3rd attribute of VaultId, was throwing error not in table.  Maybe change table to have that field if needed
      //doesn't recognize name, not instantiated maybe?
      // keep.Description = Description,
      keep.VaultId = id;
      return keep;
      {
        //   name = keep.Name,
        // keep.Name = name;
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
