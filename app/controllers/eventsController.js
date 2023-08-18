const eventModel = require('../models/eventModel');

module.exports = {
  index: async (req, res, next) => {
    try {
      const events = await eventModel.find();

      return res.json({
        events: events
      });
    } catch (err) {
      console.error('Błąd podczas pobierania wydarzeń:', err);
      return res.status(500).json({
        message: "Wystąpił błąd podczas pobierania wydarzeń",
        error: err
      });
    }
  },
  create: async (req, res, next) => {
    try {
      const event = new eventModel({
        name: req.body.name,
        event: req.body.event,
        city: req.body.city
      });


      const savedEvent = await event.save();
      return res.status(201).json(savedEvent);

    } catch (err) {
      console.error('', err);

      return res.status(500).json({
        message: "error while creating event",
        error: err
      });
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      const deletedEvent = await eventModel.findByIdAndRemove(id);

      if (!deletedEvent) {
        return res.status(404).json({
          message: "Event not found"
        });
      }

      return res.status(200).json({
        id: id,
        delete: true
      });
    } catch (err) {
      console.error('Błąd podczas usuwania wydarzenia:', err);
      return res.status(500).json({
        message: "Wystąpił błąd podczas usuwania wydarzenia",
        error: err
      });
    }
  }
}