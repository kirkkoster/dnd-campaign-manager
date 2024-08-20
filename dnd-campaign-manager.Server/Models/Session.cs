namespace Campaign_Manager.Server.Models
{
    public class Session
    {

        public int Id { get; set; }
        public int OwnerId { get; set; }
        public required string Title { get; set; }
        public DateTime Date { get; set; }
        public string[]? Objectives { get; set; }
        public string? Notes { get; set; }
    }
}
