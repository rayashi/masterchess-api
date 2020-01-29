
const { History } = require("../models");

class HistoryProcessor {
  
  async getAllHistory() {
    let allHistories = await History.findAll({
      attributes: ['cell', 'moves', 'created_at']
    });
    
    return allHistories;
  }

}

module.exports = new HistoryProcessor();