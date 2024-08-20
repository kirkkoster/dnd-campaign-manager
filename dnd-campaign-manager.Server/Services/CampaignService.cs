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

    public async Task<IEnumerable<Campaigns>> GetAllCampaignsAsync(int ownerId)
    {
        return await _context.Campaign.Where(x => x.OwnerId == ownerId).ToListAsync();
    }

    public async Task<Campaigns> GetCampaignByIdAsync(int id)
    {
        var campaign = await _context.Campaign.SingleOrDefaultAsync(x => x.Id == id);
        return campaign;
    }

    public async Task<Campaigns> AddCampaignAsync(Campaigns campaign)
    {
       _context.Campaign.Add(campaign);
        await _context.SaveChangesAsync();
        return campaign;
    }

    public async Task<Campaigns> UpdateCampaignAsync(Campaigns campaign)
    {
        _context.Entry(campaign).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return campaign;
    }

    public async Task<bool> DeleteCampaignAsync(int id, int ownerId)
    {
        var campaign = await _context.Campaign.FirstOrDefaultAsync(x => x.Id == id && x.OwnerId == ownerId);
        if (campaign == null)
        {
            return false;
        }

        _context.Campaign.Remove(campaign);
        await _context.SaveChangesAsync();
        return true;
    }
}

