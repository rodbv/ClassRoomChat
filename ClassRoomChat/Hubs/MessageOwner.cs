using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassRoomChat.Hubs
{
    public class MessageOwner
    {
        public string UserName { get; set; }

        public string Avatar { get; set; }

        public string UserNick { get; set; }
    }
}