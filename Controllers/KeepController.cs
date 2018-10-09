using System;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{

  [Route("[controller]")]
  public class KeepController : Controller
  {
    private readonly KeepsRepository _repo;

  }
}