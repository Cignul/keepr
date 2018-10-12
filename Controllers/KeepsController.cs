using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

//controller for keeps

namespace keepr.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class KeepsController : Controller
  {
    KeepsRepository _repo;
    public KeepsController(KeepsRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    //get keeps
    public IEnumerable<Keep> Get()
    {
      return _repo.GetAll();
    }

    //post keeps to api

    [HttpPost]
    public Keep Post([FromBody] Keep keep)
    {
      if (ModelState.IsValid)
      {
        return _repo.Create(keep);

      }
      throw new Exception("invalid keep");
    }
    //put keeps to api (update)
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    { }

    //DELETE keeps
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      _repo.Delete(id);
      return;
    }


  }
}