using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace ClassRoomChat.Hubs
{
    using Microsoft.AspNet.SignalR.Hubs;

    [HubName("chatroomhub")]
    public class ChatRoomHub : Hub
    {
        private readonly ChatMonitor _chatMonitor;

        public ChatRoomHub() : this(ChatMonitor.Instance) { }

        public ChatRoomHub(ChatMonitor chatMonitor)
        {
            _chatMonitor = chatMonitor;
        }

        public ChatInfo GetChatInfo()
        {
            return _chatMonitor.GetChatInfo();
        }
    }
}