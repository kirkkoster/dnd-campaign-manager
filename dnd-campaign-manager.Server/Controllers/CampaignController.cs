using dnd_campaign_manager.Server.Models;
using dnd_campaign_manager.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dnd_campaign_manager.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CampaignController : ControllerBase
    {
        private readonly ICampaignService _campaignService;

        public CampaignController(ICampaignService campaignService)
        {
            _campaignService = campaignService;
        }

        [HttpGet(Name = "GetCampaignList")]
        public IEnumerable<Campaigns> Get() 
        { 
            
            return new List<Campaigns>();
        }
    }
}
