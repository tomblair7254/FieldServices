using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UsersDto
    {
        public string Username { get; set; }
        public string Token { get; set; }
        public string HasLogin { get; set; }
    }
}