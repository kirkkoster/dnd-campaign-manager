using dnd_campaign_manager.Server.Models;

namespace dnd_campaign_manager.Server.Services
{
    public interface ICampaignService
    {
        Task<IEnumerable<Campaigns>> GetAllCampaignsAsync();
        Task<Campaigns> GetCampaignByIdAsync(int id);
        Task<Campaigns> AddCampaignAsync(Campaigns campaign);
        Task<Campaigns> UpdateCampaignAsync(Campaigns campaign);
        Task<bool> DeleteCampaignAsync(int id);
    }
}
