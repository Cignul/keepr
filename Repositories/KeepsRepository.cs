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

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    public IEnumerable<Keep> GetAll()
    {
      return _db.Query<Keep>("SELECT * FROM keeps;");
    }
    public Keep GetById(int id)
    {
      return _db.Query<Keep>("SELECT * FROM keeps WHERE id = @id;", new { id }).FirstOrDefault();
    }
    //removed 3rd attribute of VaultId, was throwing error not in table. 
    //null name error
    public Keep Create(Keep keep)
    {
      int id = _db.ExecuteScalar<int>(@"
      INSERT INTO keeps (name, description)
      VALUES (@Name, @Description);
      SELECT LAST_INSERT_ID();", keep
      );

      // keep.Description = Description,
      keep.id = id;
      return keep;
      {
      }
    }

    public void Delete(int id)
    {
      _db.Execute(@"
      DELETE FROM keeps WHERE id = @id
     ", new { id });
    }
  }
}
