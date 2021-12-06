import Cat from "../model/model";

// RESOLVERS = CONTROLLEURS

export const resolvers = {

    Query: {
        hello: () => 'hello is it my you\'re looking for ?',
        cats: async () => await Cat.find()
    },

    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({name});
            await kitty.save();
            return kitty;
        }
    }
}



