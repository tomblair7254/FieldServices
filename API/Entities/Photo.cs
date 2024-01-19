namespace API.Entities
{
    public class Photo :BaseEntity
    {
        public string Url { get; set; }
        public Inventory Inventory { get; set; }
        public int InventoryId { get; set; }
    }
}