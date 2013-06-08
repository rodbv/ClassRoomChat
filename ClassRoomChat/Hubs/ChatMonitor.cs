using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassRoomChat.Hubs
{
    using Microsoft.AspNet.SignalR;
    using Microsoft.AspNet.SignalR.Hubs;

    public class ChatMonitor
    {
        private readonly static Lazy<ChatMonitor> _instance = new Lazy<ChatMonitor>(() => new ChatMonitor(GlobalHost.ConnectionManager.GetHubContext<ChatRoomHub>().Clients));

        private ChatMonitor(IHubConnectionContext clients)
        {
            Clients = clients;
        }
        public static ChatMonitor Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        private IHubConnectionContext Clients { get; set; }

        public ChatInfo GetChatInfo()
        {
            return new ChatInfo();
        }
    }
}