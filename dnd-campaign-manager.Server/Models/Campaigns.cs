using Campaign_Manager.Server.Models;

namespace dnd_campaign_manager.Server.Models
{
    public class Campaigns
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public Session[]? Sessions { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
