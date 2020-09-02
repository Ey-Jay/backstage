const resolvers = {
  Query: {
    tours: async (_, __, { dataSources }) => {
      return dataSources.tour.getTours();
    },
    tour: async (_, { id }, { dataSources }) => {
      return dataSources.tour.getTour({ id });
    },
    shows: async (_, __, { dataSources }) => {
      return dataSources.show.getShows();
    },
    show: async (_, { id }, { dataSources }) => {
      return dataSources.show.getShow({ id });
    },
  },

  Tour: {
    shows: async (parent, __, { dataSources }) => {
      return dataSources.show.getShowsByIds({ ids: parent.shows });
    },
  },
};

module.exports = resolvers;
