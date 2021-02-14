using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using RestSharp;

namespace free_champ_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FreeChampController : ControllerBase
    {


        public FreeChampController()
        {
        }

        [HttpGet]
        public string Get()
        {
            var client = new RestClient("https://br1.api.riotgames.com/lol/platform/v3/champion-rotations");
            var request = new RestRequest(Method.GET);
            request.AddHeader("X-Riot-Token", "RGAPI-53bb9303-d354-41e6-bc46-e10c08c83f67");
            
            return client.Execute(request).Content;
        }


    }
}
