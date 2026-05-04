import UserStats from "../models/UserStats.js";

export const getStats = async (req, res) => {
  const stats = await UserStats.findOne({
    userId: req.params.userId
  });

  res.json(stats);
};

export const updateWeight = async (req, res) => {
  const { weight } = req.body;

  let stats = await UserStats.findOne({
    userId: req.params.userId
  });

  if (!stats) {
    stats = new UserStats({
      userId: req.params.userId
    });
  }

  stats.weightHistory.push({
    date: new Date(),
    weight
  });

  await stats.save();

  res.json(stats);
};

export const addTrainingDay = async (req, res) => {
  let stats = await UserStats.findOne({
    userId: req.params.userId
  });

  if (!stats) {
    stats = new UserStats({
      userId: req.params.userId
    });
  }

  stats.trainingFrequency.push({
    date: new Date(),
    trained: true
  });

  await stats.save();

  res.json(stats);
};