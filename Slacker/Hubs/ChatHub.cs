using Microsoft.AspNet.SignalR;

namespace Slacker.Hubs
{
    public class ChatHub : Hub
    {
        public void SendMessage(string username, string message)
        {
            Clients.All.receiveMessage(username, message);
        }
    }
}