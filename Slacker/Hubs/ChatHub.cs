﻿using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;

namespace Slacker.Hubs
{
    public class ChatHub : Hub
    {
        public Task JoinChannel(string userName, string groupName)
        {
            Clients.OthersInGroup(groupName).userJoinedChannel(userName);
            return Groups.Add(Context.ConnectionId, groupName);
        }

        public Task LeaveChannel(string userName, string groupName)
        {
            Clients.OthersInGroup(groupName).userLeftChannel(userName);
            return Groups.Remove(Context.ConnectionId, groupName);
        }

        public void SendMessage(string userName, string message)
        {
            Clients.All.receiveMessage(userName, message);
        }
    }
}