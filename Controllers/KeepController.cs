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
  public class KeepController : Controller
  {
    //not sure if i need this next line, similar to AccountContr.
    //private readonly KeepsRepository _repo;
    public ActionResult<IEnumerable<string>> Get()
    {
      string[] response = new string[4];
      response[0] = "value1";
      response[1] = "value2";
      response[2] = "value3";
      response[3] = "value4";
      return response;
      //alternately return new string[] {"value1", value2"};
    }
    //get api/values/5
    [HttpGet("{id}")]

    public ActionResult<string> Get(int id)
    {
      return "value";
    }

    //post api/values
    [HttpPost]
    public void Post([FromBody] string value)
    {

    }
    //put api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    { }

    //DELETE api/vaues/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    { }


  }
}