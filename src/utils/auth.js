export const createSession = (user) => {
  localStorage.setItem("ticketapp_session", JSON.stringify(user));
};

export const getSession = () => {
  const data = localStorage.getItem("ticketapp_session");
  return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
  localStorage.removeItem("ticketapp_session");
};
