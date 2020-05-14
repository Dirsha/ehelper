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
export const addPartner = {
  type: "ADD_PARTNER",
  payload: {
    profession: "Decor",
    budgets: "300$ is little cash",
  },
};
