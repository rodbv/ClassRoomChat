using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassRoomChat.Hubs
{
    public class ChatInfo
    {
        public string ChatId
        {
            get
            {
                return Guid.NewGuid().ToString();
            }
        }
    }
}