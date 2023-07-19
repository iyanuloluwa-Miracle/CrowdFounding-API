module.exports = {
  create: async (req, res) => {
    try {
      const { title, description, goal, category } = req.body;

      // Create a new campaign
      const campaign = await Campaign.create({ title, description, goal, category}).fetch();

      res.json({ campaign });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  find: async (req, res) => {
    try {
      const { page, limit, search, filter } = req.query;
  
      // Prepare filter query
      const filterQuery = filter ? { category: filter } : {};
  
      // Prepare search query
      const searchQuery = search ? { title: { contains: search } } : {};
  
      // Apply pagination
      const currentPage = parseInt(page) || 1;
      const recordsPerPage = 3; // Set the desired number of campaigns per page
      const skip = (currentPage - 1) * recordsPerPage;
      const totalCampaigns = await Campaign.count({ ...searchQuery, ...filterQuery });
      const totalPages = Math.ceil(totalCampaigns / recordsPerPage);
  
      // Fetch campaigns based on pagination, search, and filter
      const campaigns = await Campaign.find({
        where: { ...searchQuery, ...filterQuery },
        skip,
        limit: recordsPerPage,
      });
  
      res.json({ campaigns, currentPage, totalPages });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  

  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const campaign = await Campaign.findOne({ id });

      if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }

      res.json({ campaign });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },


  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, goal, category } = req.body;

      // Update campaign
      const updatedCampaign = await Campaign.updateOne({ id }).set({ title, description, goal, category });

      if (!updatedCampaign) {
        return res.status(404).json({ error: 'Campaign not found, Please create one now' });
      }

      res.json({ campaign: updatedCampaign });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      // Delete campaign
      const deletedCampaign = await Campaign.destroyOne({ id });

      if (!deletedCampaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }

      res.json({ message: 'Campaign deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};
