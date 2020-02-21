const History = require("../Services/HistoryService/HistoryService");

class GetAllHistoryController {

  async handleRequest(req, res) {

    try {  
      return res.json(await History.getAllHistory());
    } catch(error) {
      res.status(400);
      return res.send({error});
    }

  }
}

module.exports = new GetAllHistoryController();