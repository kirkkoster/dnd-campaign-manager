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
        public IEnumerable<Campaigns> Get(int ownerId) 
        { 
            _campaignService.GetAllCampaignsAsync(ownerId).Wait();
            return new List<Campaigns>();
        }

        [HttpGet("{id}", Name = "GetCampaignById")]
        public async Task<ActionResult<Campaigns>> GetById(int id)
        {
            var campaign = await _campaignService.GetCampaignByIdAsync(id);
            if (campaign == null)
            {
                return NotFound();
            }
            return Ok(campaign);
        }

        // POST: api/Campaigns
        [HttpPost(Name = "AddCampaign")]
        public async Task<ActionResult<Campaigns>> AddCampaign([FromBody] Campaigns campaign)
        {
            var newCampaign = await _campaignService.AddCampaignAsync(campaign);
            return CreatedAtRoute("GetCampaignById", new { id = newCampaign.Id }, newCampaign);
        }

        // PUT: api/Campaigns/5
        [HttpPut("{id}", Name = "UpdateCampaign")]
        public async Task<IActionResult> Put(int id, [FromBody] Campaigns campaign)
        {
            if (id != campaign.Id)
            {
                return BadRequest();
            }

            var updatedCampaign = await _campaignService.UpdateCampaignAsync(campaign);
            return Ok(updatedCampaign);
        }

        // DELETE: api/Campaigns/5?ownerId=1
        [HttpDelete("{id}", Name = "DeleteCampaign")]
        public async Task<IActionResult> Delete(int id, int ownerId)
        {
            var success = await _campaignService.DeleteCampaignAsync(id, ownerId);
            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
