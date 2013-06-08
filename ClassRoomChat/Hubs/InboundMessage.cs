using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassRoomChat.Hubs
{
    public class InboundMessage
    {
        public string Owner { get; set; }

        public string Body { get; set; }
    }
}