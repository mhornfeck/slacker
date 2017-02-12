using System.Web.Mvc;

namespace Slacker.Controllers
{
    public class ChatController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}