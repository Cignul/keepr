using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

//controller for vaultkeeps

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class VaultKeepsController : Controller
  {
    VaultsRepository _repo;

    public VaultKeepsController(VaultsRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]

    public IEnumerable<VaultKeep> Get()
    {
      return _repo.GetAll();
    }

    [Authorize]
    [HttpPost]

    public VaultKeep Post([FromBody]VaultKeep vaultkeep)
    {
      if (ModelState.IsValid)
      {
        vaultkeep = new VaultKeep(vaultkeep.VaultId, vaultkeep.KeepId, vaultkeep.UserId);
        return _repo.CreateVaultKeep(vaultkeep);
      }
      throw new System.Exception("invalid createVaultKeep");
    }
  }
}