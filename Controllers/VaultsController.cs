using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  //not liking these decorations for some reason
  [Route("api/[controller]")]
  [ApiController]

  public class VaultsController : Controller
  {
    VaultsRepository _repo;

    public VaultsController(VaultsRepository repo)
    {
      _repo = repo;
    }
    [HttpGet]

    public IEnumerable<Vault> Get()
    {
      return _repo.GetAllVaults();
    }

    //post api/values
    [HttpPost]

    public Vault Post([FromBody] Vault vault)
    {
      if (ModelState.IsValid)
      {
        return _repo.Create(vault);
      }
      throw new Exception("invalid vault");
    }

    [HttpPut("{id}")]

    public void Put(int id, [FromBody] string value)
    { }

    [HttpDelete("{id}")]

    public void Delete(int id)
    { }


    //VAULTKEEPS
    [HttpGet("/keeps/{vaultId}")]
    public IEnumerable<Keep> GetKeepsByVaultId()
    {

    }


  }
}