const HistoryProcessor = require("../HistoryProcessor/HistoryProcessor");

class GetAllHistoryController {

  async handleRequest(req, res) {

    try {  
      return res.json(await HistoryProcessor.getAllHistory());
    } catch(error) {
      res.status(400);
      return res.send({error});
    }

  }
}

module.exports = new GetAllHistoryController();