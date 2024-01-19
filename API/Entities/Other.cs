namespace API.Entities
{
    public class Other : BaseEntity
    {

        public string Location { get; set; }
        public DateTime DateRemoved { get; set; }
        public string RemoveBy { get; set; }
        public DateTime DateReturned { get; set; }
        public string Tag { get; set; }
        public string Status { get; set; }
    }
}