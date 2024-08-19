using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Campaign_Manager.Server.Models;
using dnd_campaign_manager.Server.Models;
using dnd_campaign_manager.Server.Services;
using Microsoft.EntityFrameworkCore;

public class CampaignService : ICampaignService
{
    private readonly CampaignManagerContext _context;

    public CampaignService(CampaignManagerContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Campaigns>> GetAllCampaignsAsync()
    {
        var campaignList = new List<Campaigns>();

        return campaignList; //await _context.Campaigns.ToListAsync();
    }

    public async Task<Campaigns> GetCampaignByIdAsync(int id)
    {
        var campaignList = new Campaigns();
        return campaignList; // await _context.Campaigns.FindAsync(id);
    }

    public async Task<Campaigns> AddCampaignAsync(Campaigns campaign)
    {
        //_context.Campaigns.Add(campaign);
        await _context.SaveChangesAsync();
        return campaign;
    }

    public async Task<Campaigns> UpdateCampaignAsync(Campaigns campaign)
    {
        //_context.Entry(campaign).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return campaign;
    }

    public async Task<bool> DeleteCampaignAsync(int id)
    {
        //var campaign = await _context.Campaigns.FindAsync(id);
        //if (campaign == null)
        //{
        //    return false;
        //}

        //_context.Campaigns.Remove(campaign);
        await _context.SaveChangesAsync();
        return true;
    }
}

