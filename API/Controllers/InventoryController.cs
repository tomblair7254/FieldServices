using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // [Authorize]
    public class InventoryController : BaseAPIController
    {
        private readonly DataContext _context;

        public InventoryController(DataContext context)        
        {
            _context = context;
        }

        // [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inventory>>> GetInventory()
        {
           return  await _context.Inventories.ToListAsync();
        }

        [HttpGet("{id}")] // /inventory/2
        public async Task<ActionResult<Inventory>> GetInventory(int id)
        {
            return await _context.Inventories.FindAsync(id);
        }

    }
}