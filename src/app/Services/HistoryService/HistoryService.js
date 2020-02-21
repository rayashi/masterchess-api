
const { History } = require("../../Models");

class HistoryService {
  
  async getAllHistory() {
    let allHistories = await History.findAll({
      attributes: ['cell', 'moves', 'created_at']
    });
    
    return allHistories;
  }

}

module.exports = new HistoryService();