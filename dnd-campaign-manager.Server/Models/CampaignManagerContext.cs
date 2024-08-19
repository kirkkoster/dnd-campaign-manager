using dnd_campaign_manager.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Campaign_Manager.Server.Models
{
    public class CampaignManagerContext : DbContext
    {
        public CampaignManagerContext(DbContextOptions<CampaignManagerContext> options)
            : base(options)
        {
        }

        // Define your DbSet properties here. For example:
        // public DbSet<YourEntity> YourEntities { get; set; }
        //public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<Session> Session { get; set; }
        public DbSet<Campaigns> Campaign { get; set; }

        // Optionally, override OnConfiguring if you want to handle configuration directly in the context
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
    }
}
