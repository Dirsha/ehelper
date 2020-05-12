export const addUser = {
  type: "ADD_USER",
  payload: {
    id: "123234345345345234234",
    fullName: "Igor Dirsha",
    paid: true,
  },
};

export const addWedding = {
  type: "ADD_WEDDING",
  payload: {
    date: new Date(),
    customers: "Ira i Igor",
    budget: "300$",
  },
};
