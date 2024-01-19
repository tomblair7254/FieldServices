namespace API.Entities
{
    public class Inventory : BaseEntity
    {
         
        public string Name { get; set; }
        public string Description { get; set; }
        public string Pin { get; set; } 
        public string Serial { get; set; }
        
    }
}