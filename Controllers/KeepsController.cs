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
  public class KeepsController : Controller
  {
    KeepsRepository _repo;
    public KeepsController(KeepsRepository repo)
    {
      _repo = repo;
    }
    //not sure if I need  {{ID}} on the httpget decoration
    [HttpGet]

    public IEnumerable<Keep> Get()
    {
      return _repo.GetAll();
    }

    //post api/values
    [HttpPost]
    public Keep Post([FromBody] Keep keep)
    {
      if (ModelState.IsValid)
      {
        //keep = new Keep(keep.Name, keep.Description);
        return _repo.Create(keep);

      }
      throw new Exception("invalid keep");
    }
    //put api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    { }

    //DELETE api/keeps/{some id}
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      _repo.Delete(id);
      return;
    }


  }
}