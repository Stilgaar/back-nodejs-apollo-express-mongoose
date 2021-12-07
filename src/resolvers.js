import Cat from "../model/model";
import NewMessage from "../model/newmessage";

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
    },

    Mutation: {
        NewMessage : async(_, {noms, email, title, message}) => {
            console.log('POOUET POUEET')
            const newmessage = await NewMessage({noms, email, title, message});
            await newmessage.save();
            return newmessage;
        }
    }
}




