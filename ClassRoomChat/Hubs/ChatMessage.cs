using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassRoomChat.Hubs
{
    public class ChatMessage
    {
        public MessageOwner Owner { get; set; }

        public DateTime? Time { get; set; }

        public string Body { get; set; }
    }


}