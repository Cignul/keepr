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

  [Route("api/[controller]")]
  [ApiController]

  //VAULT controller
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

    //vault post to api
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

    //vault put to api (update)
    public void Put(int id, [FromBody] string value)
    { }

    [HttpDelete("{id}")]

    //delete a vault
    public void Delete(int id)
    { }

    //GET VAULTKEEPS
    [HttpGet("keeps/{vaultId}")]

    //many to many, method to get a Vault's associated Keeps by Id
    public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      return _repo.getKeepsByVaultId(vaultId);
    }

    //CREATE VAULTKEEP
    [Authorize]
    [HttpPost("/keeps")]
    public bool CreateVaultkeep([FromBody]VaultKeep vkdata)
    {
      if (ModelState.IsValid)
      {
        vkdata.UserId = HttpContext.User.Identity.Name;
        return _repo.CreateVaultKeep(vkdata);
      }
      return false;
    }
  }
}





